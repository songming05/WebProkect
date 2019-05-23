package goods.dao;

import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import goods.bean.GoodsDTO;

@Repository
@Transactional
public class GoodsDAOMybatis implements GoodsDAO {
	@Autowired
	private SqlSession sqlSession;
	
	@Override
	public GoodsDTO getGoods(String prdtCode) {
		
		return sqlSession.selectOne("goodsSQL.getGoods",prdtCode);
	}
}
