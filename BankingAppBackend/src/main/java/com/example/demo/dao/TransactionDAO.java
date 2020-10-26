package com.example.demo.dao;

import com.example.demo.entity.Transaction;

import java.util.List;

public interface TransactionDAO {
    List<Transaction> findByUserID(int id);
    void save(Transaction transaction);
    void deleteByID(int id);
}
