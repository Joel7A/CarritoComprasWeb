
package com.tienda.config;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

public class Conexion {

Connection con;
String url  = "jdbc:mysql://localhost:3306/bdcarritocompras";
String user = "admin";
String pass = "";

public Connection getConnection(){
    try {
        Class.forName("com.myslq.jdbc.Driver");//hacemo la conexion a la base de datos 
        con = DriverManager.getConnection(url,user,pass);
    } catch (ClassNotFoundException | SQLException e) {
        System.out.println("Error:" + e);
    }
    return con;
  }
}

