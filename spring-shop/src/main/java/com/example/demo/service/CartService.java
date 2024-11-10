package com.example.demo.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.example.demo.Entity.Cart;
import com.example.demo.repository.CartRepository;

@Service
public class CartService {
	private CartRepository cartRepository;
	
	private CartService(CartRepository cartRepository) {
		this.cartRepository = cartRepository;
	}

	public List<Cart> getAllCart(){
		return cartRepository.findAll();
	}
}
