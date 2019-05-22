package member.controller;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;

import member.bean.MemberDTO;
import member.bean.ZipcodeDTO;
import member.dao.MemberDAO;

@Controller
@RequestMapping("/member")
public class MemberController {
	@Autowired
	private MemberDAO memberDAO;
	
	@RequestMapping(value = "/writeForm.do", method = RequestMethod.GET)
	public String writeForm(Model model) {
		model.addAttribute("display", "/member/writeForm.jsp");
		return "/main/index";
	}
	@RequestMapping(value = "/checkId.do", method = RequestMethod.POST)
	@ResponseBody
	public String checkId(@RequestParam String id) {
		//DB
		MemberDTO memberDTO = memberDAO.isExistId(id);
		if(memberDTO==null) {
			return"not_exist";
		} else return "exist";
	}
	
	@RequestMapping(value = "/checkPost.do", method = RequestMethod.GET)
	//public String checkPost(@RequestParam String sido, String sigungu, String roadname) {
	public String checkPost() {
		//DB
//		if(sido=="시도선택"||sido==null)
			return "/member/checkPost";
//		else
	}
	
	@RequestMapping(value = "/postSearch.do", method = RequestMethod.POST)
	public ModelAndView postSearch(@RequestParam Map<String,String> map) {
		ModelAndView modelAndView = new ModelAndView();
		
		List<ZipcodeDTO> list = memberDAO.getZipcodeList(map);
		
		
		return modelAndView;		
	}
	
}
