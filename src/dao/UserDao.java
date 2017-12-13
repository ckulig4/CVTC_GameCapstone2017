package dao;

import java.util.List;

import model.User;

public interface UserDao {
	
	void populate(String filePath) throws Exception;
	
	List<User> retrieveUsers() throws Exception;
	
	void insertUser(User user) throws Exception;

}
