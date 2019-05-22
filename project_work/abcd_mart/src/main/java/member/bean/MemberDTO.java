package member.bean;

import org.springframework.stereotype.Component;

import lombok.Data;

@Data
@Component
public class MemberDTO {
	private String name, id, pwd, gender, email1, email2,
					tel1, tel2, tel3, zipcode, addr1, addr2, logtime;
}
