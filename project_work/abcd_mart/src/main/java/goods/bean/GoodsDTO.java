package goods.bean;

import org.springframework.stereotype.Component;

import lombok.Data;

@Component
@Data
public class GoodsDTO {
	private String goodsMainName;
	private String goodsMiniName;
	private String styleCode;
	private String prdtCode;
	private int price;
	private String deliveryPrice;
	private String sizeMin;
	private String sizeMax;
	private String goodsImage1;
	private String goodsImage2;
	private String goodsImage3;
	private String goodsImage4;
	private String goodsImage5;
	private String goodsDetailImage1;
	private String goodsDetailImage2;
	private String goodsDetailImage3;
}
