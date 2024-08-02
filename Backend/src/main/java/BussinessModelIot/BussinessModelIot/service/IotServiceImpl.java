package BussinessModelIot.BussinessModelIot.service;

import BussinessModelIot.BussinessModelIot.Repository.IotProductRepository;
import BussinessModelIot.BussinessModelIot.exception.ResourceNotFoundException;
import BussinessModelIot.BussinessModelIot.models.IotModels;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import javax.sql.rowset.serial.SerialBlob;
import java.io.IOException;
import java.sql.Blob;
import java.sql.SQLException;
import java.util.List;
import java.util.Optional;

@Service
public class IotServiceImpl implements IotService{

    @Autowired
    IotProductRepository iotProductRepository;
    @Override
    public IotModels addProduct(MultipartFile file, String name, String description, double rating, String category)throws SQLException, IOException {
        IotModels iotProduct = new IotModels();
        iotProduct.setName(name);
        iotProduct.setDescription(description);
        iotProduct.setRating(rating);
        iotProduct.setCategory(category);
        if (!file.isEmpty()){
            byte[] photoBytes = file.getBytes();
            Blob photoBlob = new SerialBlob(photoBytes);
            iotProduct.setPhoto(photoBlob);
        }
        return iotProductRepository.save(iotProduct);
    }

    @Override
    public List<IotModels> getAllProducts() {
        return iotProductRepository.findAll();
    }

    @Override
    public byte[] getProductImageById(Long id) throws SQLException{
        Optional<IotModels> theproduct=iotProductRepository.findById(id);
        if(theproduct.isEmpty()){
            throw new ResourceNotFoundException("Sorry, product not found!");
        }
        Blob productPhoto=theproduct.get().getPhoto();
        if(productPhoto!=null){
            return productPhoto.getBytes(1, (int) productPhoto.length());
        }
        return null;
    }
}
