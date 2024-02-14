package com.security.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.security.configs.entity.Image;


public interface imageRepository extends JpaRepository<Image, Integer> {

}
