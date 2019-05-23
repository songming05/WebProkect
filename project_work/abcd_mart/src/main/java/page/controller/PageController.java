package page.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.servlet.ModelAndView;

import goods.bean.GoodsDTO;
import goods.dao.GoodsDAO;

@Controller
@RequestMapping("/product")
public class PageController {
	@Autowired
	private GoodsDAO goodsDAO;
	
	@RequestMapping(value="/detail",method=RequestMethod.GET)
	public ModelAndView detailPage(@RequestParam String prdtCode, Model model) {
	
		GoodsDTO goodsDTO = goodsDAO.getGoods(prdtCode);
		
		ModelAndView mav = new ModelAndView();
		mav.addObject("goodsDTO",goodsDTO);
		mav.setViewName("/product/detail");
		return mav;
	}
	
	
}
