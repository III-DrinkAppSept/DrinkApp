package model;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.logging.Level;
import java.util.logging.Logger;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@WebServlet("/SendOrderItem")
public class SendOrderItem extends HttpServlet {
	private static final long serialVersionUID = 1L;
	PrintWriter out;
	Logger log;
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		response.setContentType("text/html;charset=utf-8");
		out = response.getWriter();
		Product_SQLApi api = new Product_SQLApi();
		String orderNum =  request.getParameter("orderNum");
		String productName =  request.getParameter("productName");
		String qty =  request.getParameter("qty");
		String note =  request.getParameter("note");
		
		String productNum = api.query_product(productName);
		api.insert_orderItem(orderNum, productNum, qty, note);
	}


	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		response.setContentType("text/html;charset=utf-8");
		request.setCharacterEncoding("UTF-8");
		out = response.getWriter();
		Product_SQLApi api = new Product_SQLApi();
		String orderNum =  request.getParameter("orderNum");
		String productName =  request.getParameter("productName");
		String qty =  request.getParameter("qty");
		String note =  request.getParameter("note");
		
		String productNum = api.query_product(productName);
		api.insert_orderItem(orderNum, productNum, qty, note);
	}

}
