package user.controller;

import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import user.dao.UserDAO;

@Controller
@RequestMapping("/user")
public class UserController {
	@Autowired
	private UserDAO userDAO;
	@Autowired
	BCryptPasswordEncoder passwordEncoder;

	
	@RequestMapping(value = "/signUp", method = RequestMethod.POST)
	@ResponseBody
	public String signUp(@RequestParam Map<String,String> map) {
		//암호화 진행하면 된다
		
		return "";
	}
	
	@RequestMapping(value = "/signUpStep_01", method = RequestMethod.GET)
	public String signUpStep_01() {
		return "/user/signUpStep_01";
	}
	
	@RequestMapping(value = "/signUpStep_02", method = RequestMethod.POST)
	public String signUpStep_02(@RequestParam Map<String,String> map) {
		//System.out.println("map:  "+map);
		return "/user/signUpStep_02";
	}

}
