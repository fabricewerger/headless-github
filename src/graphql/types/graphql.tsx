export type Maybe<T> = T | null
export type InputMaybe<T> = Maybe<T>
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K]
}
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>
}
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>
}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string
  String: string
  Boolean: boolean
  Int: number
  Float: number
}

export type GqlAddLineItem = {
  /** Cart Id */
  cartId: Scalars['String']
  /** Product quantity */
  qty?: InputMaybe<Scalars['Int']>
  /** Product sku */
  sku: Scalars['String']
  /** Cart Version Id */
  version: Scalars['Int']
}

export type GqlAddress = {
  __typename?: 'Address'
  additionalAddressInfo?: Maybe<Scalars['String']>
  additionalStreetInfo?: Maybe<Scalars['String']>
  city?: Maybe<Scalars['String']>
  country: Scalars['String']
  email?: Maybe<Scalars['String']>
  firstName?: Maybe<Scalars['String']>
  id?: Maybe<Scalars['String']>
  key?: Maybe<Scalars['String']>
  lastName?: Maybe<Scalars['String']>
  mobile?: Maybe<Scalars['String']>
  phone?: Maybe<Scalars['String']>
  postalCode?: Maybe<Scalars['String']>
  streetName?: Maybe<Scalars['String']>
  streetNumber?: Maybe<Scalars['String']>
  title?: Maybe<Scalars['String']>
}

export type GqlAttribute = {
  __typename?: 'Attribute'
  key?: Maybe<Scalars['String']>
  name?: Maybe<Scalars['String']>
  value?: Maybe<Scalars['String']>
}

export type GqlAttributeFilter = {
  attribute?: InputMaybe<Scalars['String']>
  value?: InputMaybe<Scalars['String']>
}

export type GqlAvailablePaymentMethod = {
  __typename?: 'AvailablePaymentMethod'
  brands: Array<Scalars['String']>
  issuers: Array<GqlPaymentIssuer>
  name?: Maybe<Scalars['String']>
  type?: Maybe<Scalars['String']>
}

export type GqlBaseAddress = {
  additionalAddressInfo?: InputMaybe<Scalars['String']>
  additionalStreetInfo?: InputMaybe<Scalars['String']>
  city?: InputMaybe<Scalars['String']>
  country: Scalars['String']
  email?: InputMaybe<Scalars['String']>
  firstName?: InputMaybe<Scalars['String']>
  id?: InputMaybe<Scalars['String']>
  key?: InputMaybe<Scalars['String']>
  lastName?: InputMaybe<Scalars['String']>
  mobile?: InputMaybe<Scalars['String']>
  phone?: InputMaybe<Scalars['String']>
  postalCode?: InputMaybe<Scalars['String']>
  streetName?: InputMaybe<Scalars['String']>
  streetNumber?: InputMaybe<Scalars['String']>
  title?: InputMaybe<Scalars['String']>
}

export type GqlBreadCrumbItem = {
  __typename?: 'BreadCrumbItem'
  id: Scalars['String']
  name: Scalars['String']
  parentId?: Maybe<Scalars['String']>
  slug: Scalars['String']
  type: Scalars['String']
}

export enum GqlCacheControlScope {
  Private = 'PRIVATE',
  Public = 'PUBLIC',
}

/** Cart Entity */
export type GqlCart = {
  __typename?: 'Cart'
  anonymousId?: Maybe<Scalars['String']>
  billingAddress?: Maybe<GqlAddress>
  cartState?: Maybe<Scalars['String']>
  country?: Maybe<Scalars['String']>
  createdAt?: Maybe<Scalars['String']>
  customerEmail?: Maybe<Scalars['String']>
  customerId?: Maybe<Scalars['String']>
  discountCodes: Array<GqlDiscountCodeInfo>
  id: Scalars['String']
  inventoryMode?: Maybe<Scalars['String']>
  lastModifiedAt?: Maybe<Scalars['String']>
  lineItems?: Maybe<Array<Maybe<GqlLineItem>>>
  lineItemsTotalDiscount: GqlTypedMoney
  lineItemsTotalWithoutDiscount: GqlTypedMoney
  locale?: Maybe<Scalars['String']>
  origin?: Maybe<Scalars['String']>
  paymentInfo?: Maybe<GqlPaymentInfo>
  shippingAddress?: Maybe<GqlAddress>
  shippingInfo?: Maybe<GqlShippingInfo>
  taxCalculationMode?: Maybe<Scalars['String']>
  taxMode?: Maybe<Scalars['String']>
  taxRoundingMode?: Maybe<Scalars['String']>
  taxedPrice?: Maybe<GqlTaxedPrice>
  taxedShippingPrice?: Maybe<GqlTaxedPrice>
  totalLineItemQuantity?: Maybe<Scalars['Int']>
  totalPrice?: Maybe<GqlTypedMoney>
  version: Scalars['Int']
}

export type GqlCartAddress = {
  /** Cart Id */
  Id: Scalars['String']
  /** Cart Billing Address */
  billingAddress?: InputMaybe<GqlBaseAddress>
  /** Cart Shipping Address */
  shippingAddress?: InputMaybe<GqlBaseAddress>
  /** Cart Version Id */
  version: Scalars['Int']
}

export type GqlCartDiscount = {
  __typename?: 'CartDiscount'
  description?: Maybe<Scalars['String']>
  id?: Maybe<Scalars['String']>
  isActive: Scalars['Boolean']
  name?: Maybe<Scalars['String']>
  value?: Maybe<GqlCartDiscountValue>
}

export type GqlCartDiscountReference = {
  __typename?: 'CartDiscountReference'
  id?: Maybe<Scalars['String']>
  obj?: Maybe<GqlCartDiscount>
}

export type GqlCartDiscountValue = {
  __typename?: 'CartDiscountValue'
  money?: Maybe<Array<Maybe<GqlTypedMoney>>>
  permyriad?: Maybe<Scalars['Int']>
  type?: Maybe<Scalars['String']>
}

export type GqlCartIdentifier = {
  /** Cart Id */
  Id: Scalars['String']
  /** Cart version Id */
  version: Scalars['Int']
}

export type GqlCartItemActionResponse = {
  __typename?: 'CartItemActionResponse'
  cart?: Maybe<GqlCart>
  product?: Maybe<GqlProductDetail>
  productVariant?: Maybe<GqlProductVariant>
}

export type GqlCartMeta = {
  /** Cart Id */
  Id: Scalars['String']
  country?: InputMaybe<Scalars['String']>
  email?: InputMaybe<Scalars['String']>
  locale?: InputMaybe<Scalars['String']>
  /** Cart version Id */
  version: Scalars['Int']
}

export type GqlCategoryDetail = {
  __typename?: 'CategoryDetail'
  description?: Maybe<Scalars['String']>
  id: Scalars['String']
  metaTitle?: Maybe<Scalars['String']>
  name?: Maybe<Scalars['String']>
  url?: Maybe<Scalars['String']>
}

export type GqlCustomFields = {
  __typename?: 'CustomFields'
  fields?: Maybe<Array<Maybe<GqlFieldContainer>>>
  type?: Maybe<GqlTypeReference>
}

export type GqlCustomer = {
  __typename?: 'Customer'
  addresses: Array<GqlAddress>
  billingAddressIds: Array<Scalars['String']>
  companyName?: Maybe<Scalars['String']>
  dateOfBirth?: Maybe<Scalars['String']>
  defaultBillingAddressId?: Maybe<Scalars['String']>
  defaultShippingAddressId?: Maybe<Scalars['String']>
  email?: Maybe<Scalars['String']>
  firstName?: Maybe<Scalars['String']>
  lastName?: Maybe<Scalars['String']>
  locale?: Maybe<Scalars['String']>
  middleName?: Maybe<Scalars['String']>
  salutation?: Maybe<Scalars['String']>
  shippingAddressIds: Array<Scalars['String']>
  title?: Maybe<Scalars['String']>
  vatId?: Maybe<Scalars['String']>
  version?: Maybe<Scalars['Int']>
}

export type GqlCustomerCreatePasswordResetToken = {
  email?: InputMaybe<Scalars['String']>
  ttlMinutes: Scalars['Int']
}

export type GqlCustomerDraft = {
  addresses?: InputMaybe<Array<InputMaybe<GqlBaseAddress>>>
  billingAddresses?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>
  companyName?: InputMaybe<Scalars['String']>
  dateOfBirth?: InputMaybe<Scalars['String']>
  defaultBillingAddress?: InputMaybe<Scalars['Int']>
  defaultShippingAddress?: InputMaybe<Scalars['Int']>
  email: Scalars['String']
  firstName: Scalars['String']
  lastName: Scalars['String']
  locale?: InputMaybe<Scalars['String']>
  middleName?: InputMaybe<Scalars['String']>
  password: Scalars['String']
  salutation?: InputMaybe<Scalars['String']>
  shippingAddresses?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>
  title?: InputMaybe<Scalars['String']>
  vatId?: InputMaybe<Scalars['String']>
}

export type GqlCustomerSignInResult = {
  __typename?: 'CustomerSignInResult'
  cart?: Maybe<GqlCart>
  customer?: Maybe<GqlCustomer>
}

export type GqlCustomerToken = {
  __typename?: 'CustomerToken'
  createdAt?: Maybe<Scalars['String']>
  customerId?: Maybe<Scalars['String']>
  expiresAt?: Maybe<Scalars['String']>
  id?: Maybe<Scalars['String']>
  lastModifiedAt?: Maybe<Scalars['String']>
  value?: Maybe<Scalars['String']>
}

export type GqlDimensions = {
  __typename?: 'Dimensions'
  h?: Maybe<Scalars['Int']>
  w?: Maybe<Scalars['Int']>
}

export type GqlDiscountCode = {
  __typename?: 'DiscountCode'
  cartDiscounts: Array<GqlCartDiscount>
  code: Scalars['String']
  description?: Maybe<Scalars['String']>
  id: Scalars['String']
  isActive: Scalars['Boolean']
  name?: Maybe<Scalars['String']>
}

export type GqlDiscountCodeInfo = {
  __typename?: 'DiscountCodeInfo'
  discountCode?: Maybe<GqlDiscountCode>
  discountCodeRef: GqlDiscountCodeReference
  state: Scalars['String']
}

export type GqlDiscountCodeReference = {
  __typename?: 'DiscountCodeReference'
  id: Scalars['String']
  obj?: Maybe<GqlDiscountCode>
}

export type GqlDiscountedLineItemPortion = {
  __typename?: 'DiscountedLineItemPortion'
  discount?: Maybe<GqlCartDiscountReference>
  discountedAmount?: Maybe<GqlTypedMoney>
}

export type GqlDiscountedLineItemPrice = {
  __typename?: 'DiscountedLineItemPrice'
  includedDiscounts: Array<GqlDiscountedLineItemPortion>
  value?: Maybe<GqlTypedMoney>
}

export type GqlDiscountedLineItemPriceForQuantity = {
  __typename?: 'DiscountedLineItemPriceForQuantity'
  discountedPrice?: Maybe<GqlDiscountedLineItemPrice>
  quantity?: Maybe<Scalars['Int']>
}

export type GqlDiscountedPrice = {
  __typename?: 'DiscountedPrice'
  value?: Maybe<GqlTypedMoney>
}

export type GqlFacetRange = {
  __typename?: 'FacetRange'
  count?: Maybe<Scalars['Int']>
  from?: Maybe<Scalars['Int']>
  max?: Maybe<Scalars['Float']>
  min?: Maybe<Scalars['Float']>
  productCount?: Maybe<Scalars['Int']>
  to?: Maybe<Scalars['Int']>
  total?: Maybe<Scalars['Float']>
}

export type GqlFacetResult = {
  __typename?: 'FacetResult'
  attribute?: Maybe<Scalars['String']>
  count?: Maybe<Scalars['Int']>
  productCount?: Maybe<Scalars['Int']>
  ranges?: Maybe<Array<Maybe<GqlFacetRange>>>
  terms?: Maybe<Array<Maybe<GqlFacetTerm>>>
  type?: Maybe<Scalars['String']>
}

export type GqlFacetTerm = {
  __typename?: 'FacetTerm'
  count?: Maybe<Scalars['Int']>
  productCount?: Maybe<Scalars['Int']>
  term?: Maybe<Scalars['String']>
}

export type GqlFieldContainer = {
  __typename?: 'FieldContainer'
  key?: Maybe<Scalars['String']>
  value?: Maybe<Scalars['String']>
}

export type GqlFieldDefinition = {
  __typename?: 'FieldDefinition'
  label?: Maybe<Scalars['String']>
  name?: Maybe<Scalars['String']>
  required?: Maybe<Scalars['Boolean']>
}

export type GqlImage = {
  __typename?: 'Image'
  dimensions?: Maybe<GqlDimensions>
  url?: Maybe<Scalars['String']>
}

export type GqlInputAddDiscountCode = {
  /** Cart Id */
  cartId: Scalars['String']
  /** Discount Code */
  code: Scalars['String']
  /** Cart Version */
  version: Scalars['Int']
}

export type GqlInputAddShoppingListLineItem = {
  quantity?: InputMaybe<Scalars['Int']>
  /** Shopping List Id */
  shoppingListId: Scalars['String']
  sku: Scalars['String']
  /** Shopping version Id */
  version: Scalars['Int']
}

export type GqlInputAddress = {
  additionalAddressInfo?: InputMaybe<Scalars['String']>
  additionalStreetInfo?: InputMaybe<Scalars['String']>
  city?: InputMaybe<Scalars['String']>
  country: Scalars['String']
  email?: InputMaybe<Scalars['String']>
  firstName?: InputMaybe<Scalars['String']>
  id?: InputMaybe<Scalars['String']>
  isDefaultBillingAddress?: InputMaybe<Scalars['Boolean']>
  isDefaultShippingAddress?: InputMaybe<Scalars['Boolean']>
  key?: InputMaybe<Scalars['String']>
  lastName?: InputMaybe<Scalars['String']>
  mobile?: InputMaybe<Scalars['String']>
  phone?: InputMaybe<Scalars['String']>
  postalCode?: InputMaybe<Scalars['String']>
  streetName?: InputMaybe<Scalars['String']>
  streetNumber?: InputMaybe<Scalars['String']>
  title?: InputMaybe<Scalars['String']>
  /**
   * For `Customer` related operations, version is Customer Version Id.
   * For `Cart` related operations, version is Cart Version Id"
   */
  version: Scalars['Int']
}

export type GqlInputChangeShoppingListItemQuantity = {
  lineItemId: Scalars['String']
  quantity: Scalars['Int']
  /** Shopping List Id */
  shoppingListId: Scalars['String']
  /** Shopping version Id */
  version: Scalars['Int']
}

export type GqlInputRemoveDiscountCode = {
  /** Cart Id */
  cartId: Scalars['String']
  /** Discount Code */
  discountCodeId: Scalars['String']
  /** Cart Version */
  version: Scalars['Int']
}

export type GqlInputRemoveShoppingListLineItem = {
  lineItemId: Scalars['String']
  /** Shopping List Id */
  shoppingListId: Scalars['String']
  /** Shopping version Id */
  version: Scalars['Int']
}

export type GqlInputShippingMethod = {
  /** Cart Id */
  cartId: Scalars['String']
  /** Shipping Method Id */
  shippingMethodId: Scalars['String']
  /** Cart Version Id */
  version: Scalars['Int']
}

/** Cart Line Item Entity */
export type GqlLineItem = {
  __typename?: 'LineItem'
  addedAt?: Maybe<Scalars['String']>
  discountedPricePerQuantity: Array<GqlDiscountedLineItemPriceForQuantity>
  displayAttributes?: Maybe<GqlProductDisplayAttributes>
  id?: Maybe<Scalars['String']>
  lastModifiedAt?: Maybe<Scalars['String']>
  name?: Maybe<Scalars['String']>
  price?: Maybe<GqlPrice>
  productId?: Maybe<Scalars['String']>
  productSlug?: Maybe<Scalars['String']>
  quantity?: Maybe<Scalars['Int']>
  taxRate?: Maybe<GqlTaxRate>
  taxedPrice?: Maybe<GqlTaxedItemPrice>
  totalPrice?: Maybe<GqlTypedMoney>
  variant?: Maybe<GqlProductVariant>
}

export type GqlMainNavigationTreeItem = {
  __typename?: 'MainNavigationTreeItem'
  children: Array<Maybe<GqlMainNavigationTreeItem>>
  id: Scalars['ID']
  name: Scalars['String']
  url: Scalars['String']
}

export type GqlMoney = {
  __typename?: 'Money'
  currency?: Maybe<Scalars['String']>
  value?: Maybe<Scalars['Int']>
}

export type GqlMutation = {
  __typename?: 'Mutation'
  accountRemovalRequest?: Maybe<GqlCustomer>
  addAddress?: Maybe<GqlCustomer>
  addShoppingListItem?: Maybe<GqlShoppingList>
  /** Apply Discount Code to Cart */
  cartAddDiscountCode?: Maybe<GqlCart>
  /** Add item to your cart */
  cartAddItem?: Maybe<GqlCartItemActionResponse>
  /** Set Shipping and Billing Addresses */
  cartAddressSet?: Maybe<GqlCart>
  /** Delete your cart */
  cartDelete?: Maybe<GqlCart>
  cartMetaUpdate?: Maybe<GqlCart>
  /** Remove Discount Code from Cart */
  cartRemoveDiscountCode?: Maybe<GqlCart>
  /** Remove item from Cart */
  cartRemoveItem?: Maybe<GqlCartItemActionResponse>
  /** Set Shipping Method */
  cartSetShippingMethod?: Maybe<GqlCart>
  /** Update line item quantity */
  cartUpdateItemQty?: Maybe<GqlCartItemActionResponse>
  changePassword?: Maybe<GqlToken>
  changeShoppingListItemQuantity?: Maybe<GqlShoppingList>
  /** Create Adyen Payment session */
  createPaymentSession?: Maybe<GqlPayment>
  createShoppingList?: Maybe<GqlShoppingList>
  deleteShoppingList?: Maybe<GqlShoppingList>
  /** Client Will receive an email with reset password token */
  forgotPassword?: Maybe<Scalars['Boolean']>
  login?: Maybe<GqlToken>
  logout?: Maybe<Scalars['Boolean']>
  refreshToken?: Maybe<GqlToken>
  removeAddress?: Maybe<GqlCustomer>
  removeShoppingListItem?: Maybe<GqlShoppingList>
  /** Client can reset his/her password with reset password token */
  resetPassword?: Maybe<GqlCustomer>
  signup?: Maybe<GqlCustomerSignInResult>
  updateAddress?: Maybe<GqlCustomer>
  updateProfile?: Maybe<GqlCustomer>
  updateShoppingList?: Maybe<GqlShoppingList>
}

export type GqlMutationAddAddressArgs = {
  address?: InputMaybe<GqlInputAddress>
}

export type GqlMutationAddShoppingListItemArgs = {
  shoppingListItem?: InputMaybe<GqlInputAddShoppingListLineItem>
}

export type GqlMutationCartAddDiscountCodeArgs = {
  discountCode?: InputMaybe<GqlInputAddDiscountCode>
}

export type GqlMutationCartAddItemArgs = {
  item?: InputMaybe<GqlAddLineItem>
}

export type GqlMutationCartAddressSetArgs = {
  cartAddress?: InputMaybe<GqlCartAddress>
}

export type GqlMutationCartDeleteArgs = {
  cart?: InputMaybe<GqlCartIdentifier>
}

export type GqlMutationCartMetaUpdateArgs = {
  cartMeta?: InputMaybe<GqlCartMeta>
}

export type GqlMutationCartRemoveDiscountCodeArgs = {
  discountCode?: InputMaybe<GqlInputRemoveDiscountCode>
}

export type GqlMutationCartRemoveItemArgs = {
  item?: InputMaybe<GqlRemoveLineItem>
}

export type GqlMutationCartSetShippingMethodArgs = {
  shippingMethod?: InputMaybe<GqlInputShippingMethod>
}

export type GqlMutationCartUpdateItemQtyArgs = {
  item?: InputMaybe<GqlUpdateLineItem>
}

export type GqlMutationChangePasswordArgs = {
  changePassword?: InputMaybe<GqlMyCustomerChangePassword>
}

export type GqlMutationChangeShoppingListItemQuantityArgs = {
  shoppingListItem?: InputMaybe<GqlInputChangeShoppingListItemQuantity>
}

export type GqlMutationCreatePaymentSessionArgs = {
  cartId: Scalars['String']
}

export type GqlMutationCreateShoppingListArgs = {
  shoppingList?: InputMaybe<GqlMyShoppingListDraft>
}

export type GqlMutationDeleteShoppingListArgs = {
  shoppingListIdentifier?: InputMaybe<GqlShoppingListIdentifier>
}

export type GqlMutationForgotPasswordArgs = {
  email?: InputMaybe<Scalars['String']>
}

export type GqlMutationLoginArgs = {
  password: Scalars['String']
  username: Scalars['String']
}

export type GqlMutationRemoveAddressArgs = {
  removeAddress?: InputMaybe<GqlMyCustomerRemoveAddress>
}

export type GqlMutationRemoveShoppingListItemArgs = {
  shoppingListItem?: InputMaybe<GqlInputRemoveShoppingListLineItem>
}

export type GqlMutationResetPasswordArgs = {
  password?: InputMaybe<Scalars['String']>
  token?: InputMaybe<Scalars['String']>
}

export type GqlMutationSignupArgs = {
  customerDraft?: InputMaybe<GqlCustomerDraft>
}

export type GqlMutationUpdateAddressArgs = {
  address?: InputMaybe<GqlInputAddress>
}

export type GqlMutationUpdateProfileArgs = {
  profile?: InputMaybe<GqlProfile>
}

export type GqlMutationUpdateShoppingListArgs = {
  updateShoppingList?: InputMaybe<GqlUpdateShoppingList>
}

export type GqlMyCustomerChangePassword = {
  currentPassword: Scalars['String']
  newPassword: Scalars['String']
  version: Scalars['Int']
}

export type GqlMyCustomerRemoveAddress = {
  addressId: Scalars['String']
  version: Scalars['Int']
}

export type GqlMyCustomerResetPassword = {
  newPassword: Scalars['String']
  tokenValue: Scalars['String']
}

export type GqlMyShoppingListDraft = {
  description?: InputMaybe<Scalars['String']>
  name: Scalars['String']
}

/** Order Entity */
export type GqlOrder = {
  __typename?: 'Order'
  anonymousId?: Maybe<Scalars['String']>
  billingAddress?: Maybe<GqlAddress>
  completedAt?: Maybe<Scalars['String']>
  country?: Maybe<Scalars['String']>
  createdAt: Scalars['String']
  customerEmail?: Maybe<Scalars['String']>
  customerId?: Maybe<Scalars['String']>
  discountCodes: Array<GqlDiscountCodeInfo>
  id: Scalars['String']
  lastModifiedAt?: Maybe<Scalars['String']>
  lineItems?: Maybe<Array<Maybe<GqlLineItem>>>
  lineItemsTotalDiscount: GqlTypedMoney
  lineItemsTotalWithoutDiscount: GqlTypedMoney
  locale?: Maybe<Scalars['String']>
  orderNumber?: Maybe<Scalars['String']>
  orderState?: Maybe<Scalars['String']>
  paymentInfo?: Maybe<GqlPaymentInfo>
  paymentState?: Maybe<Scalars['String']>
  shipmentState?: Maybe<Scalars['String']>
  shippingAddress?: Maybe<GqlAddress>
  shippingInfo?: Maybe<GqlShippingInfo>
  taxCalculationMode?: Maybe<Scalars['String']>
  taxMode?: Maybe<Scalars['String']>
  taxRoundingMode?: Maybe<Scalars['String']>
  taxedPrice?: Maybe<GqlTaxedPrice>
  taxedShippingPrice?: Maybe<GqlTaxedPrice>
  totalPrice: GqlTypedMoney
  version: Scalars['Int']
}

export type GqlOrderSearchResult = {
  __typename?: 'OrderSearchResult'
  count?: Maybe<Scalars['Int']>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  results: Array<GqlOrder>
  total?: Maybe<Scalars['Int']>
}

export type GqlPayment = {
  __typename?: 'Payment'
  amountPlanned?: Maybe<GqlTypedMoney>
  anonymousId?: Maybe<Scalars['String']>
  id: Scalars['String']
  orderId?: Maybe<Scalars['String']>
  paymentMethodInfo?: Maybe<GqlPaymentMethodInfo>
  paymentMethods: Array<GqlAvailablePaymentMethod>
  paymentSession?: Maybe<GqlPaymentSession>
  transactions: Array<GqlTransaction>
  version: Scalars['Int']
}

/** Payment Info */
export type GqlPaymentInfo = {
  __typename?: 'PaymentInfo'
  payments: Array<GqlPaymentReference>
}

export type GqlPaymentIssuer = {
  __typename?: 'PaymentIssuer'
  id?: Maybe<Scalars['String']>
  name?: Maybe<Scalars['String']>
}

export type GqlPaymentMethodInfo = {
  __typename?: 'PaymentMethodInfo'
  method?: Maybe<Scalars['String']>
  name?: Maybe<Scalars['String']>
  paymentInterface?: Maybe<Scalars['String']>
}

/** Payment Reference */
export type GqlPaymentReference = {
  __typename?: 'PaymentReference'
  id?: Maybe<Scalars['String']>
  obj?: Maybe<GqlPayment>
  typeId?: Maybe<Scalars['String']>
}

export type GqlPaymentSession = {
  __typename?: 'PaymentSession'
  amount?: Maybe<GqlMoney>
  channel?: Maybe<Scalars['String']>
  expiresAt?: Maybe<Scalars['String']>
  id?: Maybe<Scalars['String']>
  merchantAccount?: Maybe<Scalars['String']>
  mode?: Maybe<Scalars['String']>
  reference?: Maybe<Scalars['String']>
  returnUrl?: Maybe<Scalars['String']>
  sessionData?: Maybe<Scalars['String']>
}

export type GqlPrice = {
  __typename?: 'Price'
  country?: Maybe<Scalars['String']>
  discounted?: Maybe<GqlDiscountedPrice>
  id: Scalars['String']
  validFrom?: Maybe<Scalars['String']>
  validUntil?: Maybe<Scalars['String']>
  value: GqlTypedMoney
}

export type GqlProduct = {
  __typename?: 'Product'
  availability?: Maybe<GqlProductVariantAvailability>
  displayAttributes?: Maybe<GqlProductDisplayAttributes>
  id: Scalars['String']
  /** @deprecated use images field instead of image  */
  image?: Maybe<GqlImage>
  images?: Maybe<Array<GqlImage>>
  name?: Maybe<Scalars['String']>
  price?: Maybe<GqlPrice>
  sku?: Maybe<Scalars['String']>
  url?: Maybe<Scalars['String']>
}

export type GqlProductDetail = {
  __typename?: 'ProductDetail'
  availability?: Maybe<GqlProductVariantAvailability>
  breadCrumb: Array<GqlBreadCrumbItem>
  categories?: Maybe<Array<Maybe<Scalars['String']>>>
  description?: Maybe<Scalars['String']>
  displayAttributes?: Maybe<GqlProductDisplayAttributes>
  id: Scalars['String']
  /** @deprecated use images field instead of image  */
  image?: Maybe<GqlImage>
  images: Array<GqlImage>
  masterVariant: GqlProductVariant
  metaDescription?: Maybe<Scalars['String']>
  metaKeywords?: Maybe<Scalars['String']>
  metaTitle?: Maybe<Scalars['String']>
  name: Scalars['String']
  url?: Maybe<Scalars['String']>
  variants?: Maybe<Array<Maybe<GqlProductVariant>>>
}

export type GqlProductDisplayAttributes = {
  __typename?: 'ProductDisplayAttributes'
  imperfectAlternativeTo?: Maybe<GqlProductLink>
  isHotItem?: Maybe<Scalars['Boolean']>
  orderable?: Maybe<Scalars['Boolean']>
  popularity?: Maybe<Scalars['Float']>
  rating?: Maybe<Scalars['Float']>
  supersession?: Maybe<GqlProductLink>
}

export type GqlProductLink = {
  __typename?: 'ProductLink'
  name?: Maybe<Scalars['String']>
  price?: Maybe<GqlPrice>
  sku?: Maybe<Scalars['String']>
  slug?: Maybe<Scalars['String']>
}

export type GqlProductList = {
  __typename?: 'ProductList'
  count?: Maybe<Scalars['Int']>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  results?: Maybe<Array<Maybe<GqlProduct>>>
  total?: Maybe<Scalars['Int']>
}

export type GqlProductSearchResult = {
  __typename?: 'ProductSearchResult'
  breadCrumb: Array<GqlBreadCrumbItem>
  categoryId?: Maybe<Scalars['String']>
  count?: Maybe<Scalars['Int']>
  facets?: Maybe<Array<Maybe<GqlFacetResult>>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  results?: Maybe<Array<Maybe<GqlProduct>>>
  sortOptions?: Maybe<Array<Maybe<Scalars['String']>>>
  total?: Maybe<Scalars['Int']>
}

export type GqlProductVariant = {
  __typename?: 'ProductVariant'
  attributes?: Maybe<Array<Maybe<GqlAttribute>>>
  availability?: Maybe<GqlProductVariantAvailability>
  id: Scalars['Int']
  images?: Maybe<Array<Maybe<GqlImage>>>
  isMatchingVariant?: Maybe<Scalars['Boolean']>
  key?: Maybe<Scalars['String']>
  orderable?: Maybe<Scalars['Boolean']>
  price?: Maybe<GqlPrice>
  sku?: Maybe<Scalars['String']>
}

export type GqlProductVariantAvailability = {
  __typename?: 'ProductVariantAvailability'
  availableQuantity?: Maybe<Scalars['Int']>
  isOnStock?: Maybe<Scalars['Boolean']>
  restockableInDays?: Maybe<Scalars['Int']>
}

export type GqlProfile = {
  companyName?: InputMaybe<Scalars['String']>
  dateOfBirth?: InputMaybe<Scalars['String']>
  defaultBillingAddressId?: InputMaybe<Scalars['String']>
  defaultShippingAddressId?: InputMaybe<Scalars['String']>
  email?: InputMaybe<Scalars['String']>
  firstName?: InputMaybe<Scalars['String']>
  lastName?: InputMaybe<Scalars['String']>
  locale?: InputMaybe<Scalars['String']>
  middleName?: InputMaybe<Scalars['String']>
  salutation?: InputMaybe<Scalars['String']>
  title?: InputMaybe<Scalars['String']>
  vatId?: InputMaybe<Scalars['String']>
  version: Scalars['Int']
}

export type GqlQuery = {
  __typename?: 'Query'
  categoryById?: Maybe<GqlCategoryDetail>
  customerDetails?: Maybe<GqlCustomer>
  /** Get Customer/Guest Active Cart Detail */
  getActiveCart?: Maybe<GqlCart>
  /** Get Available Payment Methods */
  getAvailablePaymentMethods?: Maybe<GqlPayment>
  /** Available Shipping Methods */
  getAvailableShippingMethods?: Maybe<Array<Maybe<GqlShippingMethod>>>
  /** Get detail of the given cart Id, customer/guest must own the cart */
  getCart?: Maybe<GqlCart>
  /** Get detail of the given order Id, customer/guest must own the Order */
  getOrder?: Maybe<GqlOrder>
  getOrders?: Maybe<GqlOrderSearchResult>
  getShoppingList?: Maybe<GqlShoppingList>
  guestToken?: Maybe<GqlToken>
  mainNavigationTreeItems?: Maybe<Array<Maybe<GqlMainNavigationTreeItem>>>
  productById?: Maybe<GqlProductDetail>
  productBySku?: Maybe<GqlProductDetail>
  productBySlug?: Maybe<GqlProductDetail>
  productSearch?: Maybe<GqlProductSearchResult>
  products?: Maybe<GqlProductList>
  route?: Maybe<GqlRoute>
  searchShoppingLists?: Maybe<GqlShoppingListPagedResult>
}

export type GqlQueryCategoryByIdArgs = {
  id?: InputMaybe<Scalars['String']>
}

export type GqlQueryGetAvailablePaymentMethodsArgs = {
  cartId: Scalars['String']
}

export type GqlQueryGetAvailableShippingMethodsArgs = {
  cartId?: InputMaybe<Scalars['String']>
}

export type GqlQueryGetCartArgs = {
  id: Scalars['String']
}

export type GqlQueryGetOrderArgs = {
  id: Scalars['String']
}

export type GqlQueryGetOrdersArgs = {
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
}

export type GqlQueryGetShoppingListArgs = {
  id?: InputMaybe<Scalars['String']>
}

export type GqlQueryProductByIdArgs = {
  id?: InputMaybe<Scalars['String']>
}

export type GqlQueryProductBySkuArgs = {
  sku?: InputMaybe<Scalars['String']>
}

export type GqlQueryProductBySlugArgs = {
  slug?: InputMaybe<Scalars['String']>
}

export type GqlQueryProductSearchArgs = {
  categoryId?: InputMaybe<Scalars['String']>
  filters?: InputMaybe<Array<InputMaybe<GqlAttributeFilter>>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  query?: InputMaybe<Scalars['String']>
  sort?: InputMaybe<Scalars['String']>
}

export type GqlQueryProductsArgs = {
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  where?: InputMaybe<Scalars['String']>
}

export type GqlQueryRouteArgs = {
  path: Scalars['String']
}

export type GqlQuerySearchShoppingListsArgs = {
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  query?: InputMaybe<Scalars['String']>
}

export type GqlRemoveLineItem = {
  /** Cart Id */
  cartId: Scalars['String']
  /** Cart Line Item Id */
  itemId: Scalars['String']
  /** Cart Version Id */
  version: Scalars['Int']
}

export type GqlRoute = {
  __typename?: 'Route'
  entityType: Scalars['String']
  id: Scalars['String']
  statusCode: Scalars['Int']
  url?: Maybe<Scalars['String']>
}

export type GqlShippingInfo = {
  __typename?: 'ShippingInfo'
  price?: Maybe<GqlTypedMoney>
  shippingMethod?: Maybe<GqlShippingMethod>
  shippingMethodName?: Maybe<Scalars['String']>
  shippingMethodState?: Maybe<Scalars['String']>
  shippingRate?: Maybe<GqlShippingRate>
  taxRate?: Maybe<GqlTaxRate>
  taxedPrice?: Maybe<GqlTaxedItemPrice>
}

export type GqlShippingMethod = {
  __typename?: 'ShippingMethod'
  description?: Maybe<Scalars['String']>
  id?: Maybe<Scalars['String']>
  name?: Maybe<Scalars['String']>
  zoneRates: Array<GqlZoneRate>
}

export type GqlShippingRate = {
  __typename?: 'ShippingRate'
  freeAbove?: Maybe<GqlTypedMoney>
  price?: Maybe<GqlTypedMoney>
  tiers?: Maybe<Array<Maybe<GqlShippingRateTier>>>
}

export type GqlShippingRateTier = {
  __typename?: 'ShippingRateTier'
  minimumCentAmount?: Maybe<Scalars['Int']>
  price?: Maybe<GqlTypedMoney>
}

export type GqlShoppingList = {
  __typename?: 'ShoppingList'
  count: Scalars['Int']
  description?: Maybe<Scalars['String']>
  id: Scalars['String']
  lineItems: Array<GqlShoppingListLineItem>
  name: Scalars['String']
  version: Scalars['Int']
}

export type GqlShoppingListIdentifier = {
  /** Shopping List Id */
  Id: Scalars['String']
  /** Shopping version Id */
  version: Scalars['Int']
}

export type GqlShoppingListLineItem = {
  __typename?: 'ShoppingListLineItem'
  addedAt: Scalars['String']
  id: Scalars['String']
  name: Scalars['String']
  productId: Scalars['String']
  productSlug?: Maybe<Scalars['String']>
  quantity?: Maybe<Scalars['Int']>
  variant?: Maybe<GqlProductVariant>
  variantId?: Maybe<Scalars['Int']>
}

export type GqlShoppingListPagedResult = {
  __typename?: 'ShoppingListPagedResult'
  count?: Maybe<Scalars['Int']>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  results: Array<GqlShoppingList>
  total?: Maybe<Scalars['Int']>
}

export type GqlTaxRate = {
  __typename?: 'TaxRate'
  amount?: Maybe<Scalars['Float']>
  country?: Maybe<Scalars['String']>
  id?: Maybe<Scalars['String']>
  includedInPrice?: Maybe<Scalars['Boolean']>
  name?: Maybe<Scalars['String']>
  state?: Maybe<Scalars['String']>
}

export type GqlTaxedItemPrice = {
  __typename?: 'TaxedItemPrice'
  totalGross?: Maybe<GqlTypedMoney>
  totalNet?: Maybe<GqlTypedMoney>
  totalTax?: Maybe<GqlTypedMoney>
}

export type GqlTaxedPrice = {
  __typename?: 'TaxedPrice'
  totalGross?: Maybe<GqlTypedMoney>
  totalNet?: Maybe<GqlTypedMoney>
  totalTax?: Maybe<GqlTypedMoney>
}

export type GqlTermFacetResult = {
  __typename?: 'TermFacetResult'
  dataType?: Maybe<Scalars['String']>
  terms?: Maybe<Array<Maybe<GqlFacetTerm>>>
  total?: Maybe<Scalars['Int']>
  type?: Maybe<Scalars['String']>
}

export type GqlToken = {
  __typename?: 'Token'
  access_token?: Maybe<Scalars['String']>
  expires_in?: Maybe<Scalars['String']>
  refresh_token?: Maybe<Scalars['String']>
  scope?: Maybe<Scalars['String']>
}

export type GqlTransaction = {
  __typename?: 'Transaction'
  amount?: Maybe<GqlTypedMoney>
  id: Scalars['String']
  interactionId?: Maybe<Scalars['String']>
  state?: Maybe<Scalars['String']>
  timestamp?: Maybe<Scalars['String']>
  type?: Maybe<Scalars['String']>
}

export type GqlType = {
  __typename?: 'Type'
  createdAt?: Maybe<Scalars['String']>
  description?: Maybe<Scalars['String']>
  fieldDefinitions?: Maybe<Array<Maybe<GqlFieldDefinition>>>
  id?: Maybe<Scalars['String']>
  key?: Maybe<Scalars['String']>
  lastModifiedAt?: Maybe<Scalars['String']>
  name?: Maybe<Scalars['String']>
  resourceTypeIds?: Maybe<Array<Maybe<Scalars['String']>>>
  version?: Maybe<Scalars['Int']>
}

export type GqlTypeReference = {
  __typename?: 'TypeReference'
  id?: Maybe<Scalars['String']>
  obj?: Maybe<GqlType>
  typeId?: Maybe<Scalars['String']>
}

export type GqlTypedMoney = {
  __typename?: 'TypedMoney'
  centAmount?: Maybe<Scalars['Int']>
  currencyCode?: Maybe<Scalars['String']>
  fractionDigits?: Maybe<Scalars['Int']>
}

export type GqlUpdateLineItem = {
  /** Cart Id */
  cartId: Scalars['String']
  /** Cart Line Item Id */
  itemId: Scalars['String']
  /** Quantity */
  qty: Scalars['Int']
  /** Cart Version Id */
  version: Scalars['Int']
}

export type GqlUpdateShoppingList = {
  description?: InputMaybe<Scalars['String']>
  /** Shopping List Id */
  id: Scalars['String']
  name?: InputMaybe<Scalars['String']>
  /** Shopping version Id */
  version: Scalars['Int']
}

export type GqlZoneRate = {
  __typename?: 'ZoneRate'
  shippingRates: Array<GqlShippingRate>
}
