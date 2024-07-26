package BussinessModelIot.BussinessModelIot.IotResponce;

import java.sql.Blob;

public class IotResponce {
    private Long id;

    private String name;

    private String description;

    private double rating;

    private String category;

    private Blob photo;
    public IotResponce() {}

    public IotResponce(Long id, String name, String description, double rating, String category,Blob photo) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.rating = rating;
        this.category = category;
        this.photo=photo;
    }
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public double getRating() {
        return rating;
    }

    public void setRating(double rating) {
        this.rating = rating;
    }

    public String getCategory() {
        return category;
    }

    public Blob getPhoto() {
        return photo;
    }

    public void setPhoto(Blob photo) {
        this.photo = photo;
    }

    public void setCategory(String category) {
        this.category = category;
    }
}