<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Simple JSP Example</title>
</head>
<body>
    <h1>Welcome to My JSP Page!</h1>
    <%
        // Java code embedded within JSP
        String name = "John Doe";
        int age = 25;
        
        // Outputting dynamic content within HTML
        %>
        <p>Name: <%= name %></p>
        <p>Age: <%= age %></p>
    <%
    %>
</body>
</html>
