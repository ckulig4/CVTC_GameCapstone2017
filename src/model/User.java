package model;

public class User {
	
	private final String username;
	private final String score;
	
	public User(String username, String score) {
		this.username = username;
		this.score = score;
	}
	
	public String getScore() {
		return score;
	}
	
	public String getUsername() {
		return username;
	}

	@Override
	public String toString() {
		return "User [username=" + username + ", score=" + score + "]";
	}
}
