package com.niit.UserAuthenticationService.repository;


import com.niit.UserAuthenticationService.model.Product;
import com.niit.UserAuthenticationService.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ProductRepo extends JpaRepository<Product,String> {

}
