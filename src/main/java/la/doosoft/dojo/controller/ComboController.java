package la.doosoft.dojo.controller;

import java.util.ArrayList;
import java.util.List;

import la.doosoft.dojo.model.Combo;
import la.doosoft.dojo.model.UserType;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
public class ComboController {

	@RequestMapping(value = "/userType/list", method = RequestMethod.GET)
	@ResponseBody
	public Combo userTypeList() {
		List<UserType> userTypeList = new ArrayList<UserType>();
		
		Combo combo = new Combo();
		
		UserType agency1 = new UserType();
		agency1.setCode("AA");
		agency1.setDescription("UT 1");		
		
		UserType agency2 = new UserType();
		agency2.setCode("BB");
		agency2.setDescription("UT 2");
		
		userTypeList.add(agency1);
		userTypeList.add(agency2);
		
		combo.setIdentifier("code");
		combo.setItems(userTypeList);
		return combo;
	}
	
}
