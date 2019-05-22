package user.signUp.controller;

import java.util.Map;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;

@Controller
@RequestMapping("/user")
public class SignUpController {
	@RequestMapping(value = "/loginStep_01", method = RequestMethod.GET)
	public String loginStep_01() {
		return "/user/loginStep_01";
	}
	
	@RequestMapping(value = "/loginStep_02", method = RequestMethod.POST)
	public String loginStep_02(@RequestParam Map<String,String> map) {
		System.out.println("map:  "+map);
		return "/user/loginStep_02";
	}
}
