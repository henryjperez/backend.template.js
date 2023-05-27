import { GraphQLResolveInfo } from 'graphql';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Custom = {
  __typename?: 'Custom';
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
};

export type DePerroDto = {
  name?: InputMaybe<Scalars['String']>;
  power?: InputMaybe<Scalars['String']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  addPerro?: Maybe<Custom>;
};


export type MutationAddPerroArgs = {
  dog?: InputMaybe<DePerroDto>;
};

export type Payload = {
  name: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  custom?: Maybe<Custom>;
  getBool?: Maybe<Scalars['Boolean']>;
  getDog?: Maybe<Scalars['String']>;
  getFloat?: Maybe<Scalars['Float']>;
  getId?: Maybe<Scalars['ID']>;
  getInt?: Maybe<Scalars['Int']>;
  getList?: Maybe<Array<Maybe<Scalars['Int']>>>;
  getNotNull: Scalars['String'];
  getNotNullInList?: Maybe<Array<Scalars['Float']>>;
  getNotNullInstead: Array<Maybe<Scalars['Int']>>;
  getNotNullsAtAll: Array<Scalars['String']>;
  getString?: Maybe<Scalars['String']>;
  perriError?: Maybe<Scalars['Int']>;
  perro?: Maybe<Scalars['String']>;
};


export type QueryCustomArgs = {
  name?: InputMaybe<Scalars['String']>;
};


export type QueryGetDogArgs = {
  name?: InputMaybe<Scalars['String']>;
};

export type WithIndex<TObject> = TObject & Record<string, any>;
export type ResolversObject<TObject> = WithIndex<TObject>;

export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs> | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;



/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = ResolversObject<{
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  Custom: ResolverTypeWrapper<Custom>;
  DePerroDto: DePerroDto;
  Float: ResolverTypeWrapper<Scalars['Float']>;
  ID: ResolverTypeWrapper<Scalars['ID']>;
  Int: ResolverTypeWrapper<Scalars['Int']>;
  Mutation: ResolverTypeWrapper<{}>;
  Payload: Payload;
  Query: ResolverTypeWrapper<{}>;
  String: ResolverTypeWrapper<Scalars['String']>;
}>;

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = ResolversObject<{
  Boolean: Scalars['Boolean'];
  Custom: Custom;
  DePerroDto: DePerroDto;
  Float: Scalars['Float'];
  ID: Scalars['ID'];
  Int: Scalars['Int'];
  Mutation: {};
  Payload: Payload;
  Query: {};
  String: Scalars['String'];
}>;

export type CustomResolvers<ContextType = any, ParentType extends ResolversParentTypes['Custom'] = ResolversParentTypes['Custom']> = ResolversObject<{
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type MutationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = ResolversObject<{
  addPerro?: Resolver<Maybe<ResolversTypes['Custom']>, ParentType, ContextType, Partial<MutationAddPerroArgs>>;
}>;

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = ResolversObject<{
  custom?: Resolver<Maybe<ResolversTypes['Custom']>, ParentType, ContextType, Partial<QueryCustomArgs>>;
  getBool?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  getDog?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType, Partial<QueryGetDogArgs>>;
  getFloat?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  getId?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  getInt?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  getList?: Resolver<Maybe<Array<Maybe<ResolversTypes['Int']>>>, ParentType, ContextType>;
  getNotNull?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  getNotNullInList?: Resolver<Maybe<Array<ResolversTypes['Float']>>, ParentType, ContextType>;
  getNotNullInstead?: Resolver<Array<Maybe<ResolversTypes['Int']>>, ParentType, ContextType>;
  getNotNullsAtAll?: Resolver<Array<ResolversTypes['String']>, ParentType, ContextType>;
  getString?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  perriError?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  perro?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
}>;

export type Resolvers<ContextType = any> = ResolversObject<{
  Custom?: CustomResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
}>;

