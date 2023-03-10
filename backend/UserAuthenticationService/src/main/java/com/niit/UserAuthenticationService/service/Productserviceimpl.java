package com.niit.UserAuthenticationService.service;

import com.niit.UserAuthenticationService.model.Product;
import com.niit.UserAuthenticationService.repository.ProductRepo;
import com.niit.UserAuthenticationService.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class Productserviceimpl implements ProductService{
    private ProductRepo productRepo;
    @Autowired
    public Productserviceimpl(ProductRepo productRepo){this.productRepo=productRepo;}
    @Override
    public List<Product> displayAllproduct() {
        return productRepo.findAll();
    }
}
