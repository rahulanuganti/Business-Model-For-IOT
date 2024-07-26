package BussinessModelIot.BussinessModelIot.controller;

import BussinessModelIot.BussinessModelIot.IotResponce.IotResponce;
import BussinessModelIot.BussinessModelIot.models.IotModels;
import BussinessModelIot.BussinessModelIot.service.IotService;
import org.apache.tomcat.util.codec.binary.Base64;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.sql.Blob;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

@CrossOrigin("*")
@RestController
@RequestMapping("/business")
public class IotController {
    @Autowired
    IotService iotService;

    @PostMapping("/add")
    public ResponseEntity<IotResponce> addProduct(
            @RequestParam("photo") MultipartFile photo,
            @RequestParam("name") String name,
            @RequestParam("description") String description,
            @RequestParam("rating") double rating,
            @RequestParam("category") String category) throws SQLException, IOException {

        IotModels savedProduct=iotService.addProduct(photo,name,description,rating,category);
        IotResponce iotResponse = new IotResponce();
        iotResponse.setId(savedProduct.getId());
        iotResponse.setName(savedProduct.getName());
        iotResponse.setDescription(savedProduct.getDescription());
        iotResponse.setRating(savedProduct.getRating());
        iotResponse.setCategory(savedProduct.getCategory());
        iotResponse.setPhoto(savedProduct.getPhoto()); // Assuming getPhoto() returns Blob data

        return ResponseEntity.ok(iotResponse);
    }

    @GetMapping("/products")
    public ResponseEntity<List<IotResponce>> getAllProducts() throws SQLException {
        List<IotModels> products = iotService.getAllProducts();
        List<IotResponce> productResponse = new ArrayList<>();

        for (IotModels product : products) {
            byte[] photoBytes = iotService.getProductImageById(product.getId());
            String base64Image = Base64.encodeBase64URLSafeString(photoBytes);

            IotResponce iotResponse = new IotResponce();
            iotResponse.setId(product.getId());
            iotResponse.setName(product.getName());
            iotResponse.setDescription(product.getDescription());
            iotResponse.setRating(product.getRating());
            iotResponse.setCategory(product.getCategory());

            if (photoBytes != null && photoBytes.length > 0) {
                Blob photoBlob = new javax.sql.rowset.serial.SerialBlob(photoBytes);
                iotResponse.setPhoto(photoBlob);
            }
            productResponse.add(iotResponse);
        }

        return ResponseEntity.ok(productResponse);
    }


}
