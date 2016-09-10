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

@WebServlet("/SendOrderList")
public class SendOrderList extends HttpServlet {
	private static final long serialVersionUID = 1L;
    PrintWriter out;
    Logger log;
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

	}


	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		response.setContentType("text/html;charset=utf-8");
		request.setCharacterEncoding("UTF-8");
		out = response.getWriter();
		
		Product_SQLApi api = new Product_SQLApi();
		String orderNum =  request.getParameter("orderNum");
		String customerId =  request.getParameter("customerId");
		String orderDate =  request.getParameter("orderDate");
		String status =  request.getParameter("status");
		String dispatch =  request.getParameter("dispatch");
		String note =  request.getParameter("note");
		api.insert_orderList(orderNum, customerId, orderDate, status, dispatch, note);
	}

}
