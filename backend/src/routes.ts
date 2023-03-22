import { Router, Response, Request } from "express";
import multer from "multer";
import { CreateUserController } from "./controllers/user/CreateUserController";
import { AuthUserController } from "./controllers/user/AuthUserController";
import { DetailUserController } from "./controllers/user/DetailUserController";

import { isAthenticaded } from "./middlewares/isAthenticaded";
import { CreateCategoryController } from "./controllers/category/CreateCategoryController";
import { ListCategoryController } from "./controllers/category/ListCategoryController";
import { CreateProductController } from "./controllers/products/CreateProductController";
import { ListByCategoryController } from "./controllers/products/ListByCategoryController";
import { ListByCategoryServiceController } from "./controllers/services/ListByCategoryServiceController";
import { ListByProductsController } from "./controllers/products/ListByProductsController";
import { CreateOrderController } from "./controllers/order/CreateOrderController";
import { RemoveOrderController } from "./controllers/order/RemoveOrderController";
import { AddItemController } from "./controllers/order/AddItemController";
import { RemoveItemController } from "./controllers/order/RemoveItemController";
import { SendOrderController } from "./controllers/order/SendOrderController";
import { ListOrderControllers } from "./controllers/order/ListOrderControllers";
import { DetailOrderController } from "./controllers/order/DetailOrderController";
import { FinishOrderController } from "./controllers/order/FinishOrderController";
import { ListOrderControllersOrc } from "./controllers/order/ListOrderControllersOrc";
import { ListOrderControllersFinish } from "./controllers/order/ListOrderControllersFinish";
import { CreateServiceController } from "./controllers/services/CreateServicesController";
import { ListByServicesController } from "./controllers/services/ListByServicesController";
import { CreateClientController } from "./controllers/clients/CreateClientController";
import { ListByClientController } from "./controllers/clients/ListByClientController";
import { CreateSupplierController } from "./controllers/supplier/CreateSupplierController";
import { ListBySupplierController } from "./controllers/supplier/ListBySupplierController";
import { AddItemPurchaseController } from "./controllers/Purchase_order/AddItemPurchaseController";
import { CreateOrderPurchaseController } from "./controllers/Purchase_order/CreateOrderPurchaseController";
import { DetailOrderPurchaseController } from "./controllers/Purchase_order/DetailOrderPurchaseController";
import { FinishOrderPurchaseController } from "./controllers/Purchase_order/FinishOrderPurchaseController";

import uploadConfig from "./config/multer";

const router = Router();

const upload = multer(uploadConfig.upload("./tmp"));

// Rotas Users
router.post("/users", new CreateUserController().handle);

router.post("/session", new AuthUserController().handle);

router.get("/me", isAthenticaded, new DetailUserController().handle);

// Rotas Category
router.post("/category", isAthenticaded, new CreateCategoryController().handle);
router.get("/category", isAthenticaded, new ListCategoryController().handle);

// Rotas Products
router.post(
  "/products",
  isAthenticaded,
  upload.single("file"),
  new CreateProductController().handle
);

router.get(
  "/category/product",
  isAthenticaded,
  new ListByCategoryController().handle
);

router.get("/products", isAthenticaded, new ListByProductsController().handle);

//rotas Services

router.post(
  "/services",
  isAthenticaded,
  upload.single("file"),
  new CreateServiceController().handle
);

router.get(
  "/category/service",
  isAthenticaded,
  new ListByCategoryServiceController().handle
);

router.get("/services", isAthenticaded, new ListByServicesController().handle);

// Rotas Order
router.post("/order", isAthenticaded, new CreateOrderController().handle);
router.delete("/order", isAthenticaded, new RemoveOrderController().handle);
router.post("/order/add", isAthenticaded, new AddItemController().handle);
router.delete(
  "/order/remove",
  isAthenticaded,
  new RemoveItemController().handle
);
router.put("/order/send", isAthenticaded, new SendOrderController().handle);
router.get("/orders", isAthenticaded, new ListOrderControllers().handle);
router.get("/orders/orc", isAthenticaded, new ListOrderControllersOrc().handle);
router.get(
  "/orders/finish",
  isAthenticaded,
  new ListOrderControllersFinish().handle
);
router.get("/order/detail", isAthenticaded, new DetailOrderController().handle);
router.put("/order/finish", isAthenticaded, new FinishOrderController().handle);

//Rotas Clientes

router.post(
  "/clients",
  isAthenticaded,
  upload.single("photo"),
  new CreateClientController().handle
);

router.get("/clients", isAthenticaded, new ListByClientController().handle);

//Rotas Fornecedores

router.post(
  "/suppliers",
  isAthenticaded,
  upload.single("photo"),
  new CreateSupplierController().handle
);

router.get("/suppliers", isAthenticaded, new ListBySupplierController().handle);

// router order de compra
router.post(
  "/order_purchase",
  isAthenticaded,
  new CreateOrderPurchaseController().handle
);
router.post(
  "/order_purchase/add",
  isAthenticaded,
  new AddItemPurchaseController().handle
);

router.get(
  "/order_purchase/detail",
  isAthenticaded,
  new DetailOrderPurchaseController().handle
);

router.put(
  "/order_purchase/finish",
  isAthenticaded,
  new FinishOrderPurchaseController().handle
);

export { router };
