package com.example.demo.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "category")
public class Category {

	@Id
	private Long categoryId;

	private String categoryName;
	private String categoryIcon;

	// Getters e Setters
	public Long getCategoryId() { return categoryId; }
	public void setCategoryId(Long categoryId) { this.categoryId = categoryId; }
	
	public String getCategoryNome() { return categoryName; }
	public void setCategoryNome(String categoryName) { this.categoryName = categoryName; }
	
	public String getCategoryIcon() { return categoryIcon; }
	public void setCategoryIcon(String categoryIcon) { this.categoryIcon = categoryIcon; }
}
