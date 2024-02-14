package com.security.configs.entity;

import org.springframework.web.bind.annotation.CrossOrigin;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="bank_detail")
@CrossOrigin(origins = "*")
public class Bank {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	private int loanamount;
	private int numberofyear;
	private int rateofinterset;
	private int monthlysalary;
	private int anualincome;
	private int emi;
	private int interest;
	private int total;
	
	private long acno;
	
	
	
	public long getAcno() {
		return acno;
	}
	public void setAcno(long acno) {
		this.acno = acno;
	}
	public int getEmi() {
		return emi;
	}
	public void setEmi(int emi) {
		this.emi = emi;
	}
	public int getInterest() {
		return interest;
	}
	public void setInterest(int interest) {
		this.interest = interest;
	}
	public int getTotal() {
		return total;
	}
	public void setTotal(int total) {
		this.total = total;
	}
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public int getLoanamount() {
		return loanamount;
	}
	public void setLoanamount(int loanamount) {
		this.loanamount = loanamount;
	}
	public int getNumberofyear() {
		return numberofyear;
	}
	public void setNumberofyear(int numberofyear) {
		this.numberofyear = numberofyear;
	}
	public int getRateofinterset() {
		return rateofinterset;
	}
	public void setRateofinterset(int rateofinterset) {
		this.rateofinterset = rateofinterset;
	}
	public int getMonthlysalary() {
		return monthlysalary;
	}
	public void setMonthlysalary(int monthlysalary) {
		this.monthlysalary = monthlysalary;
	}
	public int getAnualincome() {
		return anualincome;
	}
	public void setAnualincome(int anualincome) {
		this.anualincome = anualincome;
	}
	
	
}
	