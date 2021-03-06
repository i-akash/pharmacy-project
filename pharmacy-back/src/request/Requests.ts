// factory

import express  from 'express'

// auth
import Register from './requestHandler/userRequest/authRequestsHandler/Register'
import Login from './requestHandler/userRequest/authRequestsHandler/Login'
import FetchUser from './requestHandler/userRequest/authRequestsHandler/FetchUser'

// category
import CategoriesOverview from './requestHandler/userRequest/categoryRequestsHandler/CategoriesOverview'
import CategoryDrugs from './requestHandler/userRequest/categoryRequestsHandler/CategoryDrugs'
import Categories from './requestHandler/userRequest/categoryRequestsHandler/Categories'


// drug
import Drugs from './requestHandler/userRequest/drugs/Drugs'

// brand
import BrandOverview from './requestHandler/userRequest/brand/BrandOverview'
import BrandDrugs from './requestHandler/userRequest/brand/BrandDrugs'
import Brands from './requestHandler/userRequest/brand/Brands'


// filtering
import FilterSearch from './requestHandler/userRequest/filtering/FilterSearch'


// cart
import AddToCart from './requestHandler/userRequest/cart/AddToCart'
import GetCart from './requestHandler/userRequest/cart/GetCart'
import RemoveCart from './requestHandler/userRequest/cart/RemoveCart'


import IsAvailable from './requestHandler/userRequest/sync/IsAvailable'

// 
import Increment from './requestHandler/userRequest/sync/Increment'
import Decrement from './requestHandler/userRequest/sync/Decrement'


// 
import NewOrderInitialize from './requestHandler/userRequest/order/NewOrderInitialize'
import CancelOrder from './requestHandler/userRequest/order/CancelOrder'
import ConfirmOrder from './requestHandler/userRequest/order/ConfirmOrder'

// Order
import CurrentOrder from './requestHandler/userRequest/order/CurrentOrder'
import PastOrder from './requestHandler/userRequest/order/PastOrder'
import OrderRecieved from './requestHandler/userRequest/order/OrderRecieved'
import OrderDetails from './requestHandler/userRequest/order/OrderDetails'



// Admin
import IsSupplierAvailable from './requestHandler/adminRequest/supplier/IsSupplierAvailable'
import InsertSupplier from './requestHandler/adminRequest/supplier/InsertSupplier'


import IsDrugAvailable from './requestHandler/adminRequest/drugs/IsdrugAvailable';
import InsertSupply from './requestHandler/adminRequest/supply/InsertSupply'


import InsertDrugs from './requestHandler/adminRequest/drugs/InsertDrugs'
import InsertMenufecturer from './requestHandler/adminRequest/menufecturer/InsertMenufecturer'

import InsertEmployee from './requestHandler/adminRequest/employee/InsertEmployee'
import InsertUser from './requestHandler/adminRequest/user/InsertUser'
import InsertAdmin from './requestHandler/adminRequest/admin/InsertAdmin'


// Get
import GetAdmin from './requestHandler/adminRequest/admin/GetAdmin'
import GetUser from './requestHandler/adminRequest/user/GetUser'
import GetEmployee from './requestHandler/adminRequest/employee/GetEmployee'
import GetManufecturer from './requestHandler/adminRequest/menufecturer/GetManufecturer'
import GetSupplier from './requestHandler/adminRequest/supplier/GetSupplier'
import GetSupply from './requestHandler/adminRequest/supply/GetSupply'
import GetDrug from './requestHandler/adminRequest/drugs/GetDrug'


import DrugSales from './requestHandler/adminRequest/drugs/DrugsSales'
import CountUser from './requestHandler/adminRequest/user/CountUser'

import Sales from './requestHandler/userRequest/order/Sales'
import Search from './requestHandler/userRequest/sync/Search';

import PendingOrder from './requestHandler/adminRequest/order/PendingOrder'
import ApproveOrder from './requestHandler/adminRequest/order/ApproveOrder'
import RejectOrder from './requestHandler/adminRequest/order/RejectOrder'
import GetOrders from './requestHandler/adminRequest/order/GetOrders'

// Notification
import GetUnseenNotifications from './requestHandler/userRequest/notifications/GetUnseenNotifications'
import GetSeenNotifications from './requestHandler/userRequest/notifications/GetSeenNotifications'
import GetUnseenNotificationCount from './requestHandler/userRequest/notifications/GetUnseenNotificationCount'
import ObserveNotification from './requestHandler/userRequest/notifications/ObserveNotification'
import SeenNotification from './requestHandler/userRequest/notifications/SeenNotification'
import TrendingDrugs from './requestHandler/userRequest/drugs/TrendingDrugs'
import DiscountedDrugs from './requestHandler/userRequest/drugs/DiscountedDrugs'

// admin
import SetNotification from './requestHandler/adminRequest/notification/SetNotification' 

// analysis
import SalesBydays from './requestHandler/adminRequest/analysis/SalesBydays'
import ProfitByDays from './requestHandler/adminRequest/analysis/ProfitByDays'

// supply admin
import AvailableSupplierPrice from './requestHandler/adminRequest/supply/AvailableSupplierPrice'


// Search

import SearchEmployee from './requestHandler/adminRequest/autoCompletion/SearchEmployee'
import SearchLoaction from './requestHandler/adminRequest/autoCompletion/SearchLoaction'
import SearchManufacturer from './requestHandler/adminRequest/autoCompletion/SearchManufacturer'
import SearchProduct from './requestHandler/adminRequest/autoCompletion/SearchProduct'
import SearchSupplier from './requestHandler/adminRequest/autoCompletion/SearchSupplier'
import SearchUser from './requestHandler/adminRequest/autoCompletion/SearchUser'



// sales 
import SalesByProduct from './requestHandler/adminRequest/sales report/SalesByProduct'
import SalesByEmployee from './requestHandler/adminRequest/sales report/SalesByEmployee'
import SalesByUser from './requestHandler/adminRequest/sales report/SalesByUser'
import SalesBySupplier from './requestHandler/adminRequest/sales report/SalesBySupplier'
import SalesByManufacturer from './requestHandler/adminRequest/sales report/SalesByManufacturer'


import DrugsOverview from './requestHandler/adminRequest/drug report/DrugsOverview'
import DrugsReport from './requestHandler/adminRequest/drug report/DrugsReport'

// top ten
import TopTenUsers from './requestHandler/adminRequest/analysis/top ten/TopUser'
import TopTenDrugs from './requestHandler/adminRequest/analysis/top ten/TopDrugs'

class Requests{
    private router:any;

    constructor(){
        this.router=express.Router();
    }

    public getRouting():void{

        // auth
        this.router.post('/register', (req:any, res:any)=>new Register().handle(req,res))
        this.router.post("/login",(req:any,res:any)=>new Login().handle(req,res))
        this.router.post("/fetch_user",(req:any,res:any)=>new FetchUser().handle(req,res))
        
        // Drugs
        this.router.post("/drug",(req:any,res:any)=>new Drugs().handle(req,res))
        

        // categories
        this.router.post("/categories_overview",(req:any,res:any)=>new CategoriesOverview().handle(req,res))
        this.router.post("/category_drugs",(req:any,res:any)=>new CategoryDrugs().handle(req,res))
    
        // Brands
        this.router.get("/brand_overview",(req:any,res:any)=>new BrandOverview().handle(req,res))
        this.router.post("/brand_drugs",(req:any,res:any)=>new BrandDrugs().handle(req,res))
    
        // Filter search
        this.router.post("/filter_search",(req:any,res:any)=>new FilterSearch().handle(req,res))
    
        this.router.post("/categories",(req:any,res:any)=>new Categories().handle(req,res))
        this.router.post("/brands",(req:any,res:any)=>new Brands().handle(req,res))

        // cart
        this.router.post('/add-cart',(req:any,res:any)=>new AddToCart().handle(req,res))
        this.router.post('/remove-cart',(req:any,res:any)=>new RemoveCart().handle(req,res))
        this.router.post('/get-cart',(req:any,res:any)=>new GetCart().handle(req,res))
        
        this.router.post('/is-available',(req:any,res:any)=>new IsAvailable().handle(req,res))
        
        this.router.post('/increment',(req:any,res:any)=>new Increment().handle(req,res))
        this.router.post('/decrement',(req:any,res:any)=>new Decrement().handle(req,res))

        // order
        this.router.post('/new-order-init',(req:any,res:any)=>new NewOrderInitialize().handle(req,res))
        this.router.post('/cancel-order',(req:any,res:any)=>new CancelOrder().handle(req,res))
        this.router.post('/confirm-order',(req:any,res:any)=>new ConfirmOrder().handle(req,res))
        this.router.post('/current-order',(req:any,res:any)=>new CurrentOrder().handle(req,res))
        this.router.post('/past-order',(req:any,res:any)=>new PastOrder().handle(req,res))
        this.router.post('/order-details',(req:any,res:any)=>new OrderDetails().handle(req,res))


        this.router.post('/order-recieved',(req:any,res:any)=>new OrderRecieved().handle(req,res))
        this.router.post('/order-details',(req:any,res:any)=>new OrderDetails().handle(req,res))

        this.router.post('/sales-order',(req:any,res:any)=>new Sales().handle(req,res))
        this.router.post('/search',(req:any,res:any)=>new Search().handle(req,res))

        // Notification
        this.router.post('/get-notification-count',(req:any,res:any)=>new GetUnseenNotificationCount().handle(req,res))
        this.router.post('/get-unseen-notification',(req:any,res:any)=>new GetUnseenNotifications().handle(req,res))
        this.router.post('/get-seen-notification',(req:any,res:any)=>new GetSeenNotifications().handle(req,res))
        this.router.post('/observe-notification',(req:any,res:any)=>new ObserveNotification().handle(req,res))
        this.router.post('/seen-notification',(req:any,res:any)=>new SeenNotification().handle(req,res))

        this.router.post('/discounted-drugs',(req:any,res:any)=>new DiscountedDrugs().handle(req,res))
        this.router.post('/trending-drugs',(req:any,res:any)=>new TrendingDrugs().handle(req,res))













        // Admin
        this.router.post('/supplier-available',(req:any,res:any)=>new IsSupplierAvailable().handle(req,res))
        this.router.post('/add-supplier',(req:any,res:any)=>new InsertSupplier().handle(req,res))
        
        this.router.post('/drug-available',(req:any,res:any)=>new IsDrugAvailable().handle(req,res))

        this.router.post('/new-supply',(req:any,res:any)=>new InsertSupply().handle(req,res))


        this.router.post('/new-drug',(req:any,res:any)=>new InsertDrugs().handle(req,res))
        
        this.router.post('/add-user',(req:any,res:any)=>new InsertUser().handle(req,res))
        this.router.post('/add-admin',(req:any,res:any)=>new InsertAdmin().handle(req,res))

        this.router.post('/add-employee',(req:any,res:any)=>new InsertEmployee().handle(req,res))
        
        this.router.post('/add-manufecturer',(req:any,res:any)=>new InsertMenufecturer().handle(req,res))



        // Get
        this.router.post('/get-admin',(req:any,res:any)=>new GetAdmin().handle(req,res))

        this.router.post('/get-user',(req:any,res:any)=>new GetUser().handle(req,res))
        this.router.post('/get-employee',(req:any,res:any)=>new GetEmployee().handle(req,res))  
        this.router.post('/get-manufecturer',(req:any,res:any)=>new GetManufecturer().handle(req,res))
        
        this.router.post('/get-supplier',(req:any,res:any)=>new GetSupplier().handle(req,res))
        this.router.post('/get-supply',(req:any,res:any)=>new GetSupply().handle(req,res))
        this.router.post('/get-drug',(req:any,res:any)=>new GetDrug().handle(req,res))




        this.router.get('/drug-sale',(req:any,res:any)=>new DrugSales().handle(req,res))
        this.router.get('/user-count',(req:any,res:any)=>new CountUser().handle(req,res))


        this.router.get('/pending-order',(req:any,res:any)=>new PendingOrder().handle(req,res))

        this.router.post('/get-orders',(req:any,res:any)=>new GetOrders().handle(req,res))
        this.router.post('/approve-order',(req:any,res:any)=>new ApproveOrder().handle(req,res))
        this.router.post('/reject-order',(req:any,res:any)=>new RejectOrder().handle(req,res))

        // notification
        this.router.post('/set-notification',(req:any,res:any)=>new SetNotification().handle(req,res))
        this.router.post('/available-supplier-price',(req:any,res:any)=>new AvailableSupplierPrice().handle(req,res))
        
        this.router.post('/sales-by-days',(req:any,res:any)=>new SalesBydays().handle(req,res))
        this.router.post('/profit-by-days',(req:any,res:any)=>new ProfitByDays().handle(req,res))
                
        this.router.post('/search-employee',(req:any,res:any)=>new SearchEmployee().handle(req,res))
        this.router.post('/search-location',(req:any,res:any)=>new SearchLoaction().handle(req,res))
        this.router.post('/search-manufacturer',(req:any,res:any)=>new SearchManufacturer().handle(req,res))
        this.router.post('/search-product',(req:any,res:any)=>new SearchProduct().handle(req,res))
        this.router.post('/search-supplier',(req:any,res:any)=>new SearchSupplier().handle(req,res))
        this.router.post('/search-user',(req:any,res:any)=>new SearchUser().handle(req,res))
        
        this.router.post('/search-user',(req:any,res:any)=>new SearchUser().handle(req,res))
        this.router.post('/search-user',(req:any,res:any)=>new SearchUser().handle(req,res))
        this.router.post('/search-user',(req:any,res:any)=>new SearchUser().handle(req,res))
        this.router.post('/search-user',(req:any,res:any)=>new SearchUser().handle(req,res))
        this.router.post('/search-user',(req:any,res:any)=>new SearchUser().handle(req,res))
        

        this.router.post('/sales-employee',(req:any,res:any)=>new SalesByEmployee().handle(req,res))
        this.router.post('/sales-manufacturer',(req:any,res:any)=>new SalesByManufacturer().handle(req,res))
        this.router.post('/sales-product',(req:any,res:any)=>new SalesByProduct().handle(req,res))
        this.router.post('/sales-supplier',(req:any,res:any)=>new SalesBySupplier().handle(req,res))
        this.router.post('/sales-user',(req:any,res:any)=>new SalesByUser().handle(req,res))

        this.router.post('/drugs-overview',(req:any,res:any)=>new DrugsOverview().handle(req,res))
        this.router.post('/drugs-report',(req:any,res:any)=>new DrugsReport().handle(req,res))
       
        this.router.post('/top-ten-user',(req:any,res:any)=>new TopTenUsers().handle(req,res))
        this.router.post('/top-ten-drug',(req:any,res:any)=>new TopTenDrugs().handle(req,res))
    
    }

    public getRouter():express.Application{
        return this.router;
    }
}


let request=new Requests();
request.getRouting();

export default request.getRouter();

