package BussinessModelIot.BussinessModelIot.Repository;


import BussinessModelIot.BussinessModelIot.models.IotModels;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface IotProductRepository extends JpaRepository<IotModels, Long> {
}
