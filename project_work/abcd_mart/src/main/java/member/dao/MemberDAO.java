package member.dao;

import java.util.List;
import java.util.Map;

import member.bean.MemberDTO;
import member.bean.ZipcodeDTO;

public interface MemberDAO {

	public MemberDTO isExistId(String id);

	public List<ZipcodeDTO> getZipcodeList(Map<String, String> map);

}
