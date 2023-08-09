class AppURL{
    static BaseURL = "http://127.0.0.1:8000/api"
    static VisitorDetails = this.BaseURL+"/getvisitor"
    static PostContact = this.BaseURL+"/postcontact"
    static AllSiteInfo = this.BaseURL+"/allsiteinfo"
    static AllCategory = this.BaseURL+"/allcategory"
    static AllSlider = this.BaseURL+"/allslider"
    static ProductListByRemark(Remark){
       return this.BaseURL+"/productlistbyremark/"+Remark; 
    } 
    static ProductListByCategory(category){
       return this.BaseURL+"/productlistbycategory/"+category; 
    } 
    static ProductListBySubCategory(category, subcategory){
       return `${this.BaseURL}/productlistbysubcategory/${category}/${subcategory}`; 
    } 
}

export default AppURL
