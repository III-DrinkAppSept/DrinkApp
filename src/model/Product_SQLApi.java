package model;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.util.Properties;

import javax.swing.JOptionPane;

public class Product_SQLApi {
	private Connection conn;
	private PreparedStatement pstmt;
	
	public Product_SQLApi() {
	}
	
	
	public void setDBProp() {
		
		try {
			Properties prop = new Properties();
			prop.setProperty("user", "root");
			prop.setProperty("password", "");
			prop.setProperty("characterEncoding", "UTF-8");
			prop.setProperty("useUnicode", "true");
			prop.setProperty("useSSL", "False");
			Class.forName("com.mysql.jdbc.Driver");
			conn = DriverManager.getConnection("jdbc:mysql://localhost/erp", prop);
			
		} catch (Exception e) {
			e.printStackTrace();
		}
	}
	
	public int insert_orderList(String orderNum,String customerId,
			String orderDate,String status,String dispatch,String note){
		setDBProp();
		int isConn = 0;
		String temp = new String();
		try{
			pstmt = conn.prepareStatement(""
					+ "INSERT INTO orderlist(orderNum, customerId, orderDate, status, dispatch, note)"
					+ " VALUES(?,?,?,?,?,?)");
			pstmt.setString(1, orderNum);
			pstmt.setString(2, customerId);
			pstmt.setString(3, orderDate);
			pstmt.setString(4, status);
			pstmt.setString(5, dispatch);
			pstmt.setString(6, note);
			
			isConn = pstmt.executeUpdate();
		}catch(Exception e){
			e.getStackTrace();
		}
		return isConn;
		
	}
	
	public int insert_orderItem(String orderNum,String productNum,String qty,String note){
		setDBProp();
		int isConn = 0;
		try{
			pstmt = conn.prepareStatement(
					"INSERT INTO orderitem(orderNum, productNum, qty, note)"
					+ " VALUES (?,?,?,?)");
			pstmt.setString(1, orderNum);
			pstmt.setString(2, productNum);
			pstmt.setString(3, qty);
			pstmt.setString(4, note);
			
			isConn = pstmt.executeUpdate();
			
			
		}catch(Exception e){
			e.getStackTrace();
		}
		return isConn;
	}
	
	public String query_product(String productName){
		setDBProp();
		String productNum = "";
		try{
			pstmt = conn.prepareStatement("SELECT productNum FROM product WHERE productName =?");
			pstmt.setString(1, productName);
			
			ResultSet rs = pstmt.executeQuery();
			if(rs.next()){
				productNum = rs.getString("productNum");
			}
			
			rs.close();
			
		}catch(Exception e){
			e.getStackTrace();
		}
		return productNum;
	}
	
}
