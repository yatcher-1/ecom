class AppURL{
    static BaseURL = "http://127.0.0.1:8000/api"
    static VisitorDetails = this.BaseURL+"/getvisitor"
    static PostContact = this.BaseURL+"/postcontact"
    static AllSiteInfo = this.BaseURL+"/allsiteinfo"
    static AllCategory = this.BaseURL+"/allcategory"
    static AllSlider = this.BaseURL+"/allslider"
    static UserLogin = this.BaseURL+"/login"
    static UserRegister = this.BaseURL+"/register"
    static UserForgetPassword = this.BaseURL+"/forgetpassword"
    static UserResetPassword = this.BaseURL+"/resetpassword"
    static UserData = this.BaseURL+"/user"
    static NotificationHistory = this.BaseURL+"/notification"
    static AddToCart = this.BaseURL+"/addtocart"
    static CartOrder = this.BaseURL+"/cartorder"
    static CartCount(product_code){
      return this.BaseURL+"/cartcount/"+product_code; 
   } 
   static CartList(email){
      return this.BaseURL+"/cartlist/"+email; 
   } 
   static OrderListByUser(email){
      return this.BaseURL+"/orderlistbyuser/"+email; 
   } 
   static CartRemove(id){
      return `${this.BaseURL}/cartremove/${id}`; 
   }
   static CartItemPlus(id, quantity, price){
      return `${this.BaseURL}/cartitemplus/${id}/${quantity}/${price}`; 
   }
   static CartItemMinus(id, quantity, price){
      return `${this.BaseURL}/cartitemminus/${id}/${quantity}/${price}`; 
   }
   static AddFav(product_code, email){
      return `${this.BaseURL}/fav/${product_code}/${email}`; 
   }
   static FavouriteList(email){
      return this.BaseURL+"/favouritelist/"+email; 
   } 
   static FavouriteRemove(product_code, email){
      return `${this.BaseURL}/favouriteremove/${product_code}/${email}`; 
   }
    static ProductListByRemark(Remark){
       return this.BaseURL+"/productlistbyremark/"+Remark; 
    } 
    static ProductListByCategory(category){
       return this.BaseURL+"/productlistbycategory/"+category; 
      } 
      static ProductListBySubCategory(category, subcategory){
         return `${this.BaseURL}/productlistbysubcategory/${category}/${subcategory}`; 
      } 
      static ProductDetails(code){
         return this.BaseURL+"/productdetails/"+code; 
      } 
      static SimilarProduct(subcategory){
         return this.BaseURL+"/similar/"+subcategory; 
      } 
      static ReviewList(code){
         return this.BaseURL+"/reviewlist/"+code; 
      } 
      static ProductBySearch(searchkey){
         return this.BaseURL+"/search/"+searchkey; 
      } 
}

export default AppURL
