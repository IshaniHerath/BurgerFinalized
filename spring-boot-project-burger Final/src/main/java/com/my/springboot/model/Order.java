package com.my.springboot.model;

public class Order {
	
	private int Oid;
	private String Oitem;
	private int Oqty;
	private int Ototal;
	private String Optype;
	
	public int getOid() {
		return Oid;
	}
	public void setOid(int oid) {
		Oid = oid;
	}
	public String getOitem() {
		return Oitem;
	}
	public void setOitem(String oitem) {
		Oitem = oitem;
	}
	public int getOqty() {
		return Oqty;
	}
	public void setOqty(int oqty) {
		Oqty = oqty;
	}
	public int getOtotal() {
		return Ototal;
	}
	public void setOtotal(int ototal) {
		Ototal = ototal;
	}
	public String getOptype() {
		return Optype;
	}
	public void setOptype(String optype) {
		Optype = optype;
	}
}
