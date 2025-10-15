package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.Product;
import com.example.demo.repository.ProductRepository;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:8080")
public class ProductController {

    @Autowired
    private ProductRepository repository;

    @GetMapping("/product/find")
    public List<Product> products() {
        return repository.findAll();
    }

    @GetMapping("/category/find")
    public List<Product> findAllCategories() {
        return repository.findAll();
    }
}