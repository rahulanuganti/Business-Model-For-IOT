package BussinessModelIot.BussinessModelIot.service;

import BussinessModelIot.BussinessModelIot.models.IotModels;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.sql.SQLException;
import java.util.List;

public interface IotService {
    IotModels addProduct(MultipartFile photo, String name, String description, double rating, String category)throws SQLException, IOException;

    List<IotModels> getAllProducts();

    byte[] getProductImageById(Long id) throws SQLException;
}
