/**
 * Client
 **/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types; // general types
import $Public = runtime.Types.Public;
import $Utils = runtime.Types.Utils;
import $Extensions = runtime.Types.Extensions;
import $Result = runtime.Types.Result;

export type PrismaPromise<T> = $Public.PrismaPromise<T>;

/**
 * Model Game
 *
 */
export type Game = $Result.DefaultSelection<Prisma.$GamePayload>;
/**
 * Model Score
 *
 */
export type Score = $Result.DefaultSelection<Prisma.$ScorePayload>;
/**
 * Model Stats
 *
 */
export type Stats = $Result.DefaultSelection<Prisma.$StatsPayload>;

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Games
 * const games = await prisma.game.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions
    ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition>
      ? Prisma.GetEvents<ClientOptions['log']>
      : never
    : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
> {
  [K: symbol]: {types: Prisma.TypeMap<ExtArgs>['other']};

  /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Games
   * const games = await prisma.game.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(
    optionsArg?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>,
  );
  $on<V extends U>(
    eventType: V,
    callback: (
      event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent,
    ) => void,
  ): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void;

  /**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(
    query: TemplateStringsArray | Prisma.Sql,
    ...values: any[]
  ): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(
    query: string,
    ...values: any[]
  ): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(
    query: TemplateStringsArray | Prisma.Sql,
    ...values: any[]
  ): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(
    query: string,
    ...values: any[]
  ): Prisma.PrismaPromise<T>;

  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(
    arg: [...P],
    options?: {isolationLevel?: Prisma.TransactionIsolationLevel},
  ): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>;

  $transaction<R>(
    fn: (
      prisma: Omit<PrismaClient, runtime.ITXClientDenyList>,
    ) => $Utils.JsPromise<R>,
    options?: {
      maxWait?: number;
      timeout?: number;
      isolationLevel?: Prisma.TransactionIsolationLevel;
    },
  ): $Utils.JsPromise<R>;

  $extends: $Extensions.ExtendsHook<
    'extends',
    Prisma.TypeMapCb<ClientOptions>,
    ExtArgs,
    $Utils.Call<
      Prisma.TypeMapCb<ClientOptions>,
      {
        extArgs: ExtArgs;
      }
    >
  >;

  /**
   * `prisma.game`: Exposes CRUD operations for the **Game** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Games
   * const games = await prisma.game.findMany()
   * ```
   */
  get game(): Prisma.GameDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.score`: Exposes CRUD operations for the **Score** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Scores
   * const scores = await prisma.score.findMany()
   * ```
   */
  get score(): Prisma.ScoreDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.stats`: Exposes CRUD operations for the **Stats** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Stats
   * const stats = await prisma.stats.findMany()
   * ```
   */
  get stats(): Prisma.StatsDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF;

  export type PrismaPromise<T> = $Public.PrismaPromise<T>;

  /**
   * Validator
   */
  export import validator = runtime.Public.validator;

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError;
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError;
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError;
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError;
  export import PrismaClientValidationError = runtime.PrismaClientValidationError;

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag;
  export import empty = runtime.empty;
  export import join = runtime.join;
  export import raw = runtime.raw;
  export import Sql = runtime.Sql;

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal;

  export type DecimalJsLike = runtime.DecimalJsLike;

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics;
  export type Metric<T> = runtime.Metric<T>;
  export type MetricHistogram = runtime.MetricHistogram;
  export type MetricHistogramBucket = runtime.MetricHistogramBucket;

  /**
   * Extensions
   */
  export import Extension = $Extensions.UserArgs;
  export import getExtensionContext = runtime.Extensions.getExtensionContext;
  export import Args = $Public.Args;
  export import Payload = $Public.Payload;
  export import Result = $Public.Result;
  export import Exact = $Public.Exact;

  /**
   * Prisma Client JS version: 6.6.0
   * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
   */
  export type PrismaVersion = {
    client: string;
  };

  export const prismaVersion: PrismaVersion;

  /**
   * Utility Types
   */

  export import JsonObject = runtime.JsonObject;
  export import JsonArray = runtime.JsonArray;
  export import JsonValue = runtime.JsonValue;
  export import InputJsonObject = runtime.InputJsonObject;
  export import InputJsonArray = runtime.InputJsonArray;
  export import InputJsonValue = runtime.InputJsonValue;

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
     * Type of `Prisma.DbNull`.
     *
     * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
     *
     * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
     */
    class DbNull {
      private DbNull: never;
      private constructor();
    }

    /**
     * Type of `Prisma.JsonNull`.
     *
     * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
     *
     * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
     */
    class JsonNull {
      private JsonNull: never;
      private constructor();
    }

    /**
     * Type of `Prisma.AnyNull`.
     *
     * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
     *
     * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
     */
    class AnyNull {
      private AnyNull: never;
      private constructor();
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull;

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull;

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull;

  type SelectAndInclude = {
    select: any;
    include: any;
  };

  type SelectAndOmit = {
    select: any;
    omit: any;
  };

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> =
    T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<
    T extends (...args: any) => $Utils.JsPromise<any>,
  > = PromiseType<ReturnType<T>>;

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
    [P in K]: T[P];
  };

  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K;
  }[keyof T];

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K;
  };

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>;

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  } & (T extends SelectAndInclude
    ? 'Please either choose `select` or `include`.'
    : T extends SelectAndOmit
      ? 'Please either choose `select` or `omit`.'
      : {});

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  } & K;

  type Without<T, U> = {[P in Exclude<keyof T, keyof U>]?: never};

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> = T extends object
    ? U extends object
      ? (Without<T, U> & U) | (Without<U, T> & T)
      : U
    : T;

  /**
   * Is T a Record?
   */
  type IsObject<T extends any> =
    T extends Array<any>
      ? False
      : T extends Date
        ? False
        : T extends Uint8Array
          ? False
          : T extends BigInt
            ? False
            : T extends object
              ? True
              : False;

  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T;

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O>; // With K possibilities
    }[K];

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>;

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<
    __Either<O, K>
  >;

  type _Either<O extends object, K extends Key, strict extends Boolean> = {
    1: EitherStrict<O, K>;
    0: EitherLoose<O, K>;
  }[strict];

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1,
  > = O extends unknown ? _Either<O, K, strict> : never;

  export type Union = any;

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K];
  } & {};

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never;

  export type Overwrite<O extends object, O1 extends object> = {
    [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<
    Overwrite<
      U,
      {
        [K in keyof U]-?: At<U, K>;
      }
    >
  >;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O
    ? O[K]
    : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown
    ? AtStrict<O, K>
    : never;
  export type At<
    O extends object,
    K extends Key,
    strict extends Boolean = 1,
  > = {
    1: AtStrict<O, K>;
    0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function
    ? A
    : {
        [K in keyof A]: A[K];
      } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
      ?
          | (K extends keyof O ? {[P in K]: O[P]} & O : O)
          | ({[P in keyof O as P extends K ? P : never]-?: O[P]} & O)
      : never
  >;

  type _Strict<U, _U = U> = U extends unknown
    ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>>
    : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False;

  // /**
  // 1
  // */
  export type True = 1;

  /**
  0
  */
  export type False = 0;

  export type Not<B extends Boolean> = {
    0: 1;
    1: 0;
  }[B];

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
      ? 1
      : 0;

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >;

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0;
      1: 1;
    };
    1: {
      0: 1;
      1: 1;
    };
  }[B1][B2];

  export type Keys<U extends Union> = U extends unknown ? keyof U : never;

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;

  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object
    ? {
        [P in keyof T]: P extends keyof O ? O[P] : never;
      }
    : never;

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>,
  > = IsObject<T> extends True ? U : T;

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<
            UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never
          >
        : never
      : {} extends FieldPaths<T[K]>
        ? never
        : K;
  }[keyof T];

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never;
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>;
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T;

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<
    T,
    K extends Enumerable<keyof T> | keyof T,
  > = Prisma__Pick<T, MaybeTupleToUnion<K>>;

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}`
    ? never
    : T;

  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>;

  type FieldRefInputType<Model, FieldType> = Model extends never
    ? never
    : FieldRef<Model, FieldType>;

  export const ModelName: {
    Game: 'Game';
    Score: 'Score';
    Stats: 'Stats';
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName];

  export type Datasources = {
    db?: Datasource;
  };

  interface TypeMapCb<ClientOptions = {}>
    extends $Utils.Fn<
      {extArgs: $Extensions.InternalArgs},
      $Utils.Record<string, any>
    > {
    returns: Prisma.TypeMap<
      this['params']['extArgs'],
      ClientOptions extends {omit: infer OmitOptions} ? OmitOptions : {}
    >;
  }

  export type TypeMap<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > = {
    globalOmitOptions: {
      omit: GlobalOmitOptions;
    };
    meta: {
      modelProps: 'game' | 'score' | 'stats';
      txIsolationLevel: Prisma.TransactionIsolationLevel;
    };
    model: {
      Game: {
        payload: Prisma.$GamePayload<ExtArgs>;
        fields: Prisma.GameFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.GameFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$GamePayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.GameFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$GamePayload>;
          };
          findFirst: {
            args: Prisma.GameFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$GamePayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.GameFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$GamePayload>;
          };
          findMany: {
            args: Prisma.GameFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$GamePayload>[];
          };
          create: {
            args: Prisma.GameCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$GamePayload>;
          };
          createMany: {
            args: Prisma.GameCreateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          createManyAndReturn: {
            args: Prisma.GameCreateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$GamePayload>[];
          };
          delete: {
            args: Prisma.GameDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$GamePayload>;
          };
          update: {
            args: Prisma.GameUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$GamePayload>;
          };
          deleteMany: {
            args: Prisma.GameDeleteManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateMany: {
            args: Prisma.GameUpdateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateManyAndReturn: {
            args: Prisma.GameUpdateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$GamePayload>[];
          };
          upsert: {
            args: Prisma.GameUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$GamePayload>;
          };
          aggregate: {
            args: Prisma.GameAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateGame>;
          };
          groupBy: {
            args: Prisma.GameGroupByArgs<ExtArgs>;
            result: $Utils.Optional<GameGroupByOutputType>[];
          };
          count: {
            args: Prisma.GameCountArgs<ExtArgs>;
            result: $Utils.Optional<GameCountAggregateOutputType> | number;
          };
        };
      };
      Score: {
        payload: Prisma.$ScorePayload<ExtArgs>;
        fields: Prisma.ScoreFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.ScoreFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ScorePayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.ScoreFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ScorePayload>;
          };
          findFirst: {
            args: Prisma.ScoreFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ScorePayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.ScoreFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ScorePayload>;
          };
          findMany: {
            args: Prisma.ScoreFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ScorePayload>[];
          };
          create: {
            args: Prisma.ScoreCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ScorePayload>;
          };
          createMany: {
            args: Prisma.ScoreCreateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          createManyAndReturn: {
            args: Prisma.ScoreCreateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ScorePayload>[];
          };
          delete: {
            args: Prisma.ScoreDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ScorePayload>;
          };
          update: {
            args: Prisma.ScoreUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ScorePayload>;
          };
          deleteMany: {
            args: Prisma.ScoreDeleteManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateMany: {
            args: Prisma.ScoreUpdateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateManyAndReturn: {
            args: Prisma.ScoreUpdateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ScorePayload>[];
          };
          upsert: {
            args: Prisma.ScoreUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ScorePayload>;
          };
          aggregate: {
            args: Prisma.ScoreAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateScore>;
          };
          groupBy: {
            args: Prisma.ScoreGroupByArgs<ExtArgs>;
            result: $Utils.Optional<ScoreGroupByOutputType>[];
          };
          count: {
            args: Prisma.ScoreCountArgs<ExtArgs>;
            result: $Utils.Optional<ScoreCountAggregateOutputType> | number;
          };
        };
      };
      Stats: {
        payload: Prisma.$StatsPayload<ExtArgs>;
        fields: Prisma.StatsFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.StatsFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$StatsPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.StatsFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$StatsPayload>;
          };
          findFirst: {
            args: Prisma.StatsFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$StatsPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.StatsFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$StatsPayload>;
          };
          findMany: {
            args: Prisma.StatsFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$StatsPayload>[];
          };
          create: {
            args: Prisma.StatsCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$StatsPayload>;
          };
          createMany: {
            args: Prisma.StatsCreateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          createManyAndReturn: {
            args: Prisma.StatsCreateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$StatsPayload>[];
          };
          delete: {
            args: Prisma.StatsDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$StatsPayload>;
          };
          update: {
            args: Prisma.StatsUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$StatsPayload>;
          };
          deleteMany: {
            args: Prisma.StatsDeleteManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateMany: {
            args: Prisma.StatsUpdateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateManyAndReturn: {
            args: Prisma.StatsUpdateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$StatsPayload>[];
          };
          upsert: {
            args: Prisma.StatsUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$StatsPayload>;
          };
          aggregate: {
            args: Prisma.StatsAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateStats>;
          };
          groupBy: {
            args: Prisma.StatsGroupByArgs<ExtArgs>;
            result: $Utils.Optional<StatsGroupByOutputType>[];
          };
          count: {
            args: Prisma.StatsCountArgs<ExtArgs>;
            result: $Utils.Optional<StatsCountAggregateOutputType> | number;
          };
        };
      };
    };
  } & {
    other: {
      payload: any;
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]];
          result: any;
        };
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]];
          result: any;
        };
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]];
          result: any;
        };
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]];
          result: any;
        };
      };
    };
  };
  export const defineExtension: $Extensions.ExtendsHook<
    'define',
    Prisma.TypeMapCb,
    $Extensions.DefaultArgs
  >;
  export type DefaultPrismaClient = PrismaClient;
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal';
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources;
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string;
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat;
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     *
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[];
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number;
      timeout?: number;
      isolationLevel?: Prisma.TransactionIsolationLevel;
    };
    /**
     * Global configuration for omitting model fields by default.
     *
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig;
  }
  export type GlobalOmitConfig = {
    game?: GameOmit;
    score?: ScoreOmit;
    stats?: StatsOmit;
  };

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error';
  export type LogDefinition = {
    level: LogLevel;
    emit: 'stdout' | 'event';
  };

  export type GetLogType<T extends LogLevel | LogDefinition> =
    T extends LogDefinition
      ? T['emit'] extends 'event'
        ? T['level']
        : never
      : never;
  export type GetEvents<T extends any> =
    T extends Array<LogLevel | LogDefinition>
      ?
          | GetLogType<T[0]>
          | GetLogType<T[1]>
          | GetLogType<T[2]>
          | GetLogType<T[3]>
      : never;

  export type QueryEvent = {
    timestamp: Date;
    query: string;
    params: string;
    duration: number;
    target: string;
  };

  export type LogEvent = {
    timestamp: Date;
    message: string;
    target: string;
  };
  /* End Types for Logging */

  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy';

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName;
    action: PrismaAction;
    args: any;
    dataPath: string[];
    runInTransaction: boolean;
  };

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>;

  // tested in getLogLevel.test.ts
  export function getLogLevel(
    log: Array<LogLevel | LogDefinition>,
  ): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<
    Prisma.DefaultPrismaClient,
    runtime.ITXClientDenyList
  >;

  export type Datasource = {
    url?: string;
  };

  /**
   * Count Types
   */

  /**
   * Count Type GameCountOutputType
   */

  export type GameCountOutputType = {
    Score: number;
    Stats: number;
  };

  export type GameCountOutputTypeSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    Score?: boolean | GameCountOutputTypeCountScoreArgs;
    Stats?: boolean | GameCountOutputTypeCountStatsArgs;
  };

  // Custom InputTypes
  /**
   * GameCountOutputType without action
   */
  export type GameCountOutputTypeDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the GameCountOutputType
     */
    select?: GameCountOutputTypeSelect<ExtArgs> | null;
  };

  /**
   * GameCountOutputType without action
   */
  export type GameCountOutputTypeCountScoreArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: ScoreWhereInput;
  };

  /**
   * GameCountOutputType without action
   */
  export type GameCountOutputTypeCountStatsArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: StatsWhereInput;
  };

  /**
   * Models
   */

  /**
   * Model Game
   */

  export type AggregateGame = {
    _count: GameCountAggregateOutputType | null;
    _min: GameMinAggregateOutputType | null;
    _max: GameMaxAggregateOutputType | null;
  };

  export type GameMinAggregateOutputType = {
    id: string | null;
    name: string | null;
    slug: string | null;
    createdAt: Date | null;
  };

  export type GameMaxAggregateOutputType = {
    id: string | null;
    name: string | null;
    slug: string | null;
    createdAt: Date | null;
  };

  export type GameCountAggregateOutputType = {
    id: number;
    name: number;
    slug: number;
    createdAt: number;
    _all: number;
  };

  export type GameMinAggregateInputType = {
    id?: true;
    name?: true;
    slug?: true;
    createdAt?: true;
  };

  export type GameMaxAggregateInputType = {
    id?: true;
    name?: true;
    slug?: true;
    createdAt?: true;
  };

  export type GameCountAggregateInputType = {
    id?: true;
    name?: true;
    slug?: true;
    createdAt?: true;
    _all?: true;
  };

  export type GameAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Game to aggregate.
     */
    where?: GameWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Games to fetch.
     */
    orderBy?: GameOrderByWithRelationInput | GameOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: GameWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Games from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Games.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Games
     **/
    _count?: true | GameCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: GameMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: GameMaxAggregateInputType;
  };

  export type GetGameAggregateType<T extends GameAggregateArgs> = {
    [P in keyof T & keyof AggregateGame]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGame[P]>
      : GetScalarType<T[P], AggregateGame[P]>;
  };

  export type GameGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: GameWhereInput;
    orderBy?:
      | GameOrderByWithAggregationInput
      | GameOrderByWithAggregationInput[];
    by: GameScalarFieldEnum[] | GameScalarFieldEnum;
    having?: GameScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: GameCountAggregateInputType | true;
    _min?: GameMinAggregateInputType;
    _max?: GameMaxAggregateInputType;
  };

  export type GameGroupByOutputType = {
    id: string;
    name: string;
    slug: string;
    createdAt: Date;
    _count: GameCountAggregateOutputType | null;
    _min: GameMinAggregateOutputType | null;
    _max: GameMaxAggregateOutputType | null;
  };

  type GetGameGroupByPayload<T extends GameGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GameGroupByOutputType, T['by']> & {
        [P in keyof T & keyof GameGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], GameGroupByOutputType[P]>
          : GetScalarType<T[P], GameGroupByOutputType[P]>;
      }
    >
  >;

  export type GameSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      name?: boolean;
      slug?: boolean;
      createdAt?: boolean;
      Score?: boolean | Game$ScoreArgs<ExtArgs>;
      Stats?: boolean | Game$StatsArgs<ExtArgs>;
      _count?: boolean | GameCountOutputTypeDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['game']
  >;

  export type GameSelectCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      name?: boolean;
      slug?: boolean;
      createdAt?: boolean;
    },
    ExtArgs['result']['game']
  >;

  export type GameSelectUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      name?: boolean;
      slug?: boolean;
      createdAt?: boolean;
    },
    ExtArgs['result']['game']
  >;

  export type GameSelectScalar = {
    id?: boolean;
    name?: boolean;
    slug?: boolean;
    createdAt?: boolean;
  };

  export type GameOmit<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetOmit<
    'id' | 'name' | 'slug' | 'createdAt',
    ExtArgs['result']['game']
  >;
  export type GameInclude<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    Score?: boolean | Game$ScoreArgs<ExtArgs>;
    Stats?: boolean | Game$StatsArgs<ExtArgs>;
    _count?: boolean | GameCountOutputTypeDefaultArgs<ExtArgs>;
  };
  export type GameIncludeCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {};
  export type GameIncludeUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {};

  export type $GamePayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    name: 'Game';
    objects: {
      Score: Prisma.$ScorePayload<ExtArgs>[];
      Stats: Prisma.$StatsPayload<ExtArgs>[];
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        name: string;
        slug: string;
        createdAt: Date;
      },
      ExtArgs['result']['game']
    >;
    composites: {};
  };

  type GameGetPayload<S extends boolean | null | undefined | GameDefaultArgs> =
    $Result.GetResult<Prisma.$GamePayload, S>;

  type GameCountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = Omit<GameFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: GameCountAggregateInputType | true;
  };

  export interface GameDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>['model']['Game'];
      meta: {name: 'Game'};
    };
    /**
     * Find zero or one Game that matches the filter.
     * @param {GameFindUniqueArgs} args - Arguments to find a Game
     * @example
     * // Get one Game
     * const game = await prisma.game.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends GameFindUniqueArgs>(
      args: SelectSubset<T, GameFindUniqueArgs<ExtArgs>>,
    ): Prisma__GameClient<
      $Result.GetResult<
        Prisma.$GamePayload<ExtArgs>,
        T,
        'findUnique',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find one Game that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {GameFindUniqueOrThrowArgs} args - Arguments to find a Game
     * @example
     * // Get one Game
     * const game = await prisma.game.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends GameFindUniqueOrThrowArgs>(
      args: SelectSubset<T, GameFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__GameClient<
      $Result.GetResult<
        Prisma.$GamePayload<ExtArgs>,
        T,
        'findUniqueOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first Game that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameFindFirstArgs} args - Arguments to find a Game
     * @example
     * // Get one Game
     * const game = await prisma.game.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends GameFindFirstArgs>(
      args?: SelectSubset<T, GameFindFirstArgs<ExtArgs>>,
    ): Prisma__GameClient<
      $Result.GetResult<
        Prisma.$GamePayload<ExtArgs>,
        T,
        'findFirst',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first Game that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameFindFirstOrThrowArgs} args - Arguments to find a Game
     * @example
     * // Get one Game
     * const game = await prisma.game.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends GameFindFirstOrThrowArgs>(
      args?: SelectSubset<T, GameFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__GameClient<
      $Result.GetResult<
        Prisma.$GamePayload<ExtArgs>,
        T,
        'findFirstOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find zero or more Games that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Games
     * const games = await prisma.game.findMany()
     *
     * // Get first 10 Games
     * const games = await prisma.game.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const gameWithIdOnly = await prisma.game.findMany({ select: { id: true } })
     *
     */
    findMany<T extends GameFindManyArgs>(
      args?: SelectSubset<T, GameFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$GamePayload<ExtArgs>,
        T,
        'findMany',
        GlobalOmitOptions
      >
    >;

    /**
     * Create a Game.
     * @param {GameCreateArgs} args - Arguments to create a Game.
     * @example
     * // Create one Game
     * const Game = await prisma.game.create({
     *   data: {
     *     // ... data to create a Game
     *   }
     * })
     *
     */
    create<T extends GameCreateArgs>(
      args: SelectSubset<T, GameCreateArgs<ExtArgs>>,
    ): Prisma__GameClient<
      $Result.GetResult<
        Prisma.$GamePayload<ExtArgs>,
        T,
        'create',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Create many Games.
     * @param {GameCreateManyArgs} args - Arguments to create many Games.
     * @example
     * // Create many Games
     * const game = await prisma.game.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends GameCreateManyArgs>(
      args?: SelectSubset<T, GameCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create many Games and returns the data saved in the database.
     * @param {GameCreateManyAndReturnArgs} args - Arguments to create many Games.
     * @example
     * // Create many Games
     * const game = await prisma.game.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Games and only return the `id`
     * const gameWithIdOnly = await prisma.game.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends GameCreateManyAndReturnArgs>(
      args?: SelectSubset<T, GameCreateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$GamePayload<ExtArgs>,
        T,
        'createManyAndReturn',
        GlobalOmitOptions
      >
    >;

    /**
     * Delete a Game.
     * @param {GameDeleteArgs} args - Arguments to delete one Game.
     * @example
     * // Delete one Game
     * const Game = await prisma.game.delete({
     *   where: {
     *     // ... filter to delete one Game
     *   }
     * })
     *
     */
    delete<T extends GameDeleteArgs>(
      args: SelectSubset<T, GameDeleteArgs<ExtArgs>>,
    ): Prisma__GameClient<
      $Result.GetResult<
        Prisma.$GamePayload<ExtArgs>,
        T,
        'delete',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Update one Game.
     * @param {GameUpdateArgs} args - Arguments to update one Game.
     * @example
     * // Update one Game
     * const game = await prisma.game.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends GameUpdateArgs>(
      args: SelectSubset<T, GameUpdateArgs<ExtArgs>>,
    ): Prisma__GameClient<
      $Result.GetResult<
        Prisma.$GamePayload<ExtArgs>,
        T,
        'update',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Delete zero or more Games.
     * @param {GameDeleteManyArgs} args - Arguments to filter Games to delete.
     * @example
     * // Delete a few Games
     * const { count } = await prisma.game.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends GameDeleteManyArgs>(
      args?: SelectSubset<T, GameDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Games.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Games
     * const game = await prisma.game.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends GameUpdateManyArgs>(
      args: SelectSubset<T, GameUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Games and returns the data updated in the database.
     * @param {GameUpdateManyAndReturnArgs} args - Arguments to update many Games.
     * @example
     * // Update many Games
     * const game = await prisma.game.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Games and only return the `id`
     * const gameWithIdOnly = await prisma.game.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    updateManyAndReturn<T extends GameUpdateManyAndReturnArgs>(
      args: SelectSubset<T, GameUpdateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$GamePayload<ExtArgs>,
        T,
        'updateManyAndReturn',
        GlobalOmitOptions
      >
    >;

    /**
     * Create or update one Game.
     * @param {GameUpsertArgs} args - Arguments to update or create a Game.
     * @example
     * // Update or create a Game
     * const game = await prisma.game.upsert({
     *   create: {
     *     // ... data to create a Game
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Game we want to update
     *   }
     * })
     */
    upsert<T extends GameUpsertArgs>(
      args: SelectSubset<T, GameUpsertArgs<ExtArgs>>,
    ): Prisma__GameClient<
      $Result.GetResult<
        Prisma.$GamePayload<ExtArgs>,
        T,
        'upsert',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Count the number of Games.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameCountArgs} args - Arguments to filter Games to count.
     * @example
     * // Count the number of Games
     * const count = await prisma.game.count({
     *   where: {
     *     // ... the filter for the Games we want to count
     *   }
     * })
     **/
    count<T extends GameCountArgs>(
      args?: Subset<T, GameCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GameCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Game.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends GameAggregateArgs>(
      args: Subset<T, GameAggregateArgs>,
    ): Prisma.PrismaPromise<GetGameAggregateType<T>>;

    /**
     * Group by Game.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends GameGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? {orderBy: GameGroupByArgs['orderBy']}
        : {orderBy?: GameGroupByArgs['orderBy']},
      OrderFields extends ExcludeUnderscoreKeys<
        Keys<MaybeTupleToUnion<T['orderBy']>>
      >,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
          ? {
              [P in HavingFields]: P extends ByFields
                ? never
                : P extends string
                  ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
                  : [
                      Error,
                      'Field ',
                      P,
                      ` in "having" needs to be provided in "by"`,
                    ];
            }[HavingFields]
          : 'take' extends Keys<T>
            ? 'orderBy' extends Keys<T>
              ? ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields]
              : 'Error: If you provide "take", you also need to provide "orderBy"'
            : 'skip' extends Keys<T>
              ? 'orderBy' extends Keys<T>
                ? ByValid extends True
                  ? {}
                  : {
                      [P in OrderFields]: P extends ByFields
                        ? never
                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                    }[OrderFields]
                : 'Error: If you provide "skip", you also need to provide "orderBy"'
              : ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields],
    >(
      args: SubsetIntersection<T, GameGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors
      ? GetGameGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the Game model
     */
    readonly fields: GameFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Game.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__GameClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    Score<T extends Game$ScoreArgs<ExtArgs> = {}>(
      args?: Subset<T, Game$ScoreArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      | $Result.GetResult<
          Prisma.$ScorePayload<ExtArgs>,
          T,
          'findMany',
          GlobalOmitOptions
        >
      | Null
    >;
    Stats<T extends Game$StatsArgs<ExtArgs> = {}>(
      args?: Subset<T, Game$StatsArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      | $Result.GetResult<
          Prisma.$StatsPayload<ExtArgs>,
          T,
          'findMany',
          GlobalOmitOptions
        >
      | Null
    >;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?:
        | ((value: T) => TResult1 | PromiseLike<TResult1>)
        | undefined
        | null,
      onrejected?:
        | ((reason: any) => TResult2 | PromiseLike<TResult2>)
        | undefined
        | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?:
        | ((reason: any) => TResult | PromiseLike<TResult>)
        | undefined
        | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the Game model
   */
  interface GameFieldRefs {
    readonly id: FieldRef<'Game', 'String'>;
    readonly name: FieldRef<'Game', 'String'>;
    readonly slug: FieldRef<'Game', 'String'>;
    readonly createdAt: FieldRef<'Game', 'DateTime'>;
  }

  // Custom InputTypes
  /**
   * Game findUnique
   */
  export type GameFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Game
     */
    select?: GameSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Game
     */
    omit?: GameOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameInclude<ExtArgs> | null;
    /**
     * Filter, which Game to fetch.
     */
    where: GameWhereUniqueInput;
  };

  /**
   * Game findUniqueOrThrow
   */
  export type GameFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Game
     */
    select?: GameSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Game
     */
    omit?: GameOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameInclude<ExtArgs> | null;
    /**
     * Filter, which Game to fetch.
     */
    where: GameWhereUniqueInput;
  };

  /**
   * Game findFirst
   */
  export type GameFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Game
     */
    select?: GameSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Game
     */
    omit?: GameOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameInclude<ExtArgs> | null;
    /**
     * Filter, which Game to fetch.
     */
    where?: GameWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Games to fetch.
     */
    orderBy?: GameOrderByWithRelationInput | GameOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Games.
     */
    cursor?: GameWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Games from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Games.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Games.
     */
    distinct?: GameScalarFieldEnum | GameScalarFieldEnum[];
  };

  /**
   * Game findFirstOrThrow
   */
  export type GameFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Game
     */
    select?: GameSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Game
     */
    omit?: GameOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameInclude<ExtArgs> | null;
    /**
     * Filter, which Game to fetch.
     */
    where?: GameWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Games to fetch.
     */
    orderBy?: GameOrderByWithRelationInput | GameOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Games.
     */
    cursor?: GameWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Games from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Games.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Games.
     */
    distinct?: GameScalarFieldEnum | GameScalarFieldEnum[];
  };

  /**
   * Game findMany
   */
  export type GameFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Game
     */
    select?: GameSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Game
     */
    omit?: GameOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameInclude<ExtArgs> | null;
    /**
     * Filter, which Games to fetch.
     */
    where?: GameWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Games to fetch.
     */
    orderBy?: GameOrderByWithRelationInput | GameOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Games.
     */
    cursor?: GameWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Games from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Games.
     */
    skip?: number;
    distinct?: GameScalarFieldEnum | GameScalarFieldEnum[];
  };

  /**
   * Game create
   */
  export type GameCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Game
     */
    select?: GameSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Game
     */
    omit?: GameOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameInclude<ExtArgs> | null;
    /**
     * The data needed to create a Game.
     */
    data: XOR<GameCreateInput, GameUncheckedCreateInput>;
  };

  /**
   * Game createMany
   */
  export type GameCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many Games.
     */
    data: GameCreateManyInput | GameCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * Game createManyAndReturn
   */
  export type GameCreateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Game
     */
    select?: GameSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Game
     */
    omit?: GameOmit<ExtArgs> | null;
    /**
     * The data used to create many Games.
     */
    data: GameCreateManyInput | GameCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * Game update
   */
  export type GameUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Game
     */
    select?: GameSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Game
     */
    omit?: GameOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameInclude<ExtArgs> | null;
    /**
     * The data needed to update a Game.
     */
    data: XOR<GameUpdateInput, GameUncheckedUpdateInput>;
    /**
     * Choose, which Game to update.
     */
    where: GameWhereUniqueInput;
  };

  /**
   * Game updateMany
   */
  export type GameUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update Games.
     */
    data: XOR<GameUpdateManyMutationInput, GameUncheckedUpdateManyInput>;
    /**
     * Filter which Games to update
     */
    where?: GameWhereInput;
    /**
     * Limit how many Games to update.
     */
    limit?: number;
  };

  /**
   * Game updateManyAndReturn
   */
  export type GameUpdateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Game
     */
    select?: GameSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Game
     */
    omit?: GameOmit<ExtArgs> | null;
    /**
     * The data used to update Games.
     */
    data: XOR<GameUpdateManyMutationInput, GameUncheckedUpdateManyInput>;
    /**
     * Filter which Games to update
     */
    where?: GameWhereInput;
    /**
     * Limit how many Games to update.
     */
    limit?: number;
  };

  /**
   * Game upsert
   */
  export type GameUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Game
     */
    select?: GameSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Game
     */
    omit?: GameOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameInclude<ExtArgs> | null;
    /**
     * The filter to search for the Game to update in case it exists.
     */
    where: GameWhereUniqueInput;
    /**
     * In case the Game found by the `where` argument doesn't exist, create a new Game with this data.
     */
    create: XOR<GameCreateInput, GameUncheckedCreateInput>;
    /**
     * In case the Game was found with the provided `where` argument, update it with this data.
     */
    update: XOR<GameUpdateInput, GameUncheckedUpdateInput>;
  };

  /**
   * Game delete
   */
  export type GameDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Game
     */
    select?: GameSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Game
     */
    omit?: GameOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameInclude<ExtArgs> | null;
    /**
     * Filter which Game to delete.
     */
    where: GameWhereUniqueInput;
  };

  /**
   * Game deleteMany
   */
  export type GameDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Games to delete
     */
    where?: GameWhereInput;
    /**
     * Limit how many Games to delete.
     */
    limit?: number;
  };

  /**
   * Game.Score
   */
  export type Game$ScoreArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Score
     */
    select?: ScoreSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Score
     */
    omit?: ScoreOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScoreInclude<ExtArgs> | null;
    where?: ScoreWhereInput;
    orderBy?: ScoreOrderByWithRelationInput | ScoreOrderByWithRelationInput[];
    cursor?: ScoreWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: ScoreScalarFieldEnum | ScoreScalarFieldEnum[];
  };

  /**
   * Game.Stats
   */
  export type Game$StatsArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Stats
     */
    select?: StatsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Stats
     */
    omit?: StatsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StatsInclude<ExtArgs> | null;
    where?: StatsWhereInput;
    orderBy?: StatsOrderByWithRelationInput | StatsOrderByWithRelationInput[];
    cursor?: StatsWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: StatsScalarFieldEnum | StatsScalarFieldEnum[];
  };

  /**
   * Game without action
   */
  export type GameDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Game
     */
    select?: GameSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Game
     */
    omit?: GameOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameInclude<ExtArgs> | null;
  };

  /**
   * Model Score
   */

  export type AggregateScore = {
    _count: ScoreCountAggregateOutputType | null;
    _avg: ScoreAvgAggregateOutputType | null;
    _sum: ScoreSumAggregateOutputType | null;
    _min: ScoreMinAggregateOutputType | null;
    _max: ScoreMaxAggregateOutputType | null;
  };

  export type ScoreAvgAggregateOutputType = {
    score: number | null;
  };

  export type ScoreSumAggregateOutputType = {
    score: number | null;
  };

  export type ScoreMinAggregateOutputType = {
    id: string | null;
    gameId: string | null;
    score: number | null;
    createdAt: Date | null;
  };

  export type ScoreMaxAggregateOutputType = {
    id: string | null;
    gameId: string | null;
    score: number | null;
    createdAt: Date | null;
  };

  export type ScoreCountAggregateOutputType = {
    id: number;
    gameId: number;
    score: number;
    createdAt: number;
    _all: number;
  };

  export type ScoreAvgAggregateInputType = {
    score?: true;
  };

  export type ScoreSumAggregateInputType = {
    score?: true;
  };

  export type ScoreMinAggregateInputType = {
    id?: true;
    gameId?: true;
    score?: true;
    createdAt?: true;
  };

  export type ScoreMaxAggregateInputType = {
    id?: true;
    gameId?: true;
    score?: true;
    createdAt?: true;
  };

  export type ScoreCountAggregateInputType = {
    id?: true;
    gameId?: true;
    score?: true;
    createdAt?: true;
    _all?: true;
  };

  export type ScoreAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Score to aggregate.
     */
    where?: ScoreWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Scores to fetch.
     */
    orderBy?: ScoreOrderByWithRelationInput | ScoreOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: ScoreWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Scores from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Scores.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Scores
     **/
    _count?: true | ScoreCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
     **/
    _avg?: ScoreAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
     **/
    _sum?: ScoreSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: ScoreMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: ScoreMaxAggregateInputType;
  };

  export type GetScoreAggregateType<T extends ScoreAggregateArgs> = {
    [P in keyof T & keyof AggregateScore]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateScore[P]>
      : GetScalarType<T[P], AggregateScore[P]>;
  };

  export type ScoreGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: ScoreWhereInput;
    orderBy?:
      | ScoreOrderByWithAggregationInput
      | ScoreOrderByWithAggregationInput[];
    by: ScoreScalarFieldEnum[] | ScoreScalarFieldEnum;
    having?: ScoreScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ScoreCountAggregateInputType | true;
    _avg?: ScoreAvgAggregateInputType;
    _sum?: ScoreSumAggregateInputType;
    _min?: ScoreMinAggregateInputType;
    _max?: ScoreMaxAggregateInputType;
  };

  export type ScoreGroupByOutputType = {
    id: string;
    gameId: string;
    score: number;
    createdAt: Date;
    _count: ScoreCountAggregateOutputType | null;
    _avg: ScoreAvgAggregateOutputType | null;
    _sum: ScoreSumAggregateOutputType | null;
    _min: ScoreMinAggregateOutputType | null;
    _max: ScoreMaxAggregateOutputType | null;
  };

  type GetScoreGroupByPayload<T extends ScoreGroupByArgs> =
    Prisma.PrismaPromise<
      Array<
        PickEnumerable<ScoreGroupByOutputType, T['by']> & {
          [P in keyof T & keyof ScoreGroupByOutputType]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ScoreGroupByOutputType[P]>
            : GetScalarType<T[P], ScoreGroupByOutputType[P]>;
        }
      >
    >;

  export type ScoreSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      gameId?: boolean;
      score?: boolean;
      createdAt?: boolean;
      game?: boolean | GameDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['score']
  >;

  export type ScoreSelectCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      gameId?: boolean;
      score?: boolean;
      createdAt?: boolean;
      game?: boolean | GameDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['score']
  >;

  export type ScoreSelectUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      gameId?: boolean;
      score?: boolean;
      createdAt?: boolean;
      game?: boolean | GameDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['score']
  >;

  export type ScoreSelectScalar = {
    id?: boolean;
    gameId?: boolean;
    score?: boolean;
    createdAt?: boolean;
  };

  export type ScoreOmit<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetOmit<
    'id' | 'gameId' | 'score' | 'createdAt',
    ExtArgs['result']['score']
  >;
  export type ScoreInclude<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    game?: boolean | GameDefaultArgs<ExtArgs>;
  };
  export type ScoreIncludeCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    game?: boolean | GameDefaultArgs<ExtArgs>;
  };
  export type ScoreIncludeUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    game?: boolean | GameDefaultArgs<ExtArgs>;
  };

  export type $ScorePayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    name: 'Score';
    objects: {
      game: Prisma.$GamePayload<ExtArgs>;
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        gameId: string;
        score: number;
        createdAt: Date;
      },
      ExtArgs['result']['score']
    >;
    composites: {};
  };

  type ScoreGetPayload<
    S extends boolean | null | undefined | ScoreDefaultArgs,
  > = $Result.GetResult<Prisma.$ScorePayload, S>;

  type ScoreCountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = Omit<ScoreFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: ScoreCountAggregateInputType | true;
  };

  export interface ScoreDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>['model']['Score'];
      meta: {name: 'Score'};
    };
    /**
     * Find zero or one Score that matches the filter.
     * @param {ScoreFindUniqueArgs} args - Arguments to find a Score
     * @example
     * // Get one Score
     * const score = await prisma.score.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ScoreFindUniqueArgs>(
      args: SelectSubset<T, ScoreFindUniqueArgs<ExtArgs>>,
    ): Prisma__ScoreClient<
      $Result.GetResult<
        Prisma.$ScorePayload<ExtArgs>,
        T,
        'findUnique',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find one Score that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ScoreFindUniqueOrThrowArgs} args - Arguments to find a Score
     * @example
     * // Get one Score
     * const score = await prisma.score.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ScoreFindUniqueOrThrowArgs>(
      args: SelectSubset<T, ScoreFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__ScoreClient<
      $Result.GetResult<
        Prisma.$ScorePayload<ExtArgs>,
        T,
        'findUniqueOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first Score that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScoreFindFirstArgs} args - Arguments to find a Score
     * @example
     * // Get one Score
     * const score = await prisma.score.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ScoreFindFirstArgs>(
      args?: SelectSubset<T, ScoreFindFirstArgs<ExtArgs>>,
    ): Prisma__ScoreClient<
      $Result.GetResult<
        Prisma.$ScorePayload<ExtArgs>,
        T,
        'findFirst',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first Score that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScoreFindFirstOrThrowArgs} args - Arguments to find a Score
     * @example
     * // Get one Score
     * const score = await prisma.score.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ScoreFindFirstOrThrowArgs>(
      args?: SelectSubset<T, ScoreFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__ScoreClient<
      $Result.GetResult<
        Prisma.$ScorePayload<ExtArgs>,
        T,
        'findFirstOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find zero or more Scores that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScoreFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Scores
     * const scores = await prisma.score.findMany()
     *
     * // Get first 10 Scores
     * const scores = await prisma.score.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const scoreWithIdOnly = await prisma.score.findMany({ select: { id: true } })
     *
     */
    findMany<T extends ScoreFindManyArgs>(
      args?: SelectSubset<T, ScoreFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$ScorePayload<ExtArgs>,
        T,
        'findMany',
        GlobalOmitOptions
      >
    >;

    /**
     * Create a Score.
     * @param {ScoreCreateArgs} args - Arguments to create a Score.
     * @example
     * // Create one Score
     * const Score = await prisma.score.create({
     *   data: {
     *     // ... data to create a Score
     *   }
     * })
     *
     */
    create<T extends ScoreCreateArgs>(
      args: SelectSubset<T, ScoreCreateArgs<ExtArgs>>,
    ): Prisma__ScoreClient<
      $Result.GetResult<
        Prisma.$ScorePayload<ExtArgs>,
        T,
        'create',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Create many Scores.
     * @param {ScoreCreateManyArgs} args - Arguments to create many Scores.
     * @example
     * // Create many Scores
     * const score = await prisma.score.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends ScoreCreateManyArgs>(
      args?: SelectSubset<T, ScoreCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create many Scores and returns the data saved in the database.
     * @param {ScoreCreateManyAndReturnArgs} args - Arguments to create many Scores.
     * @example
     * // Create many Scores
     * const score = await prisma.score.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Scores and only return the `id`
     * const scoreWithIdOnly = await prisma.score.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends ScoreCreateManyAndReturnArgs>(
      args?: SelectSubset<T, ScoreCreateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$ScorePayload<ExtArgs>,
        T,
        'createManyAndReturn',
        GlobalOmitOptions
      >
    >;

    /**
     * Delete a Score.
     * @param {ScoreDeleteArgs} args - Arguments to delete one Score.
     * @example
     * // Delete one Score
     * const Score = await prisma.score.delete({
     *   where: {
     *     // ... filter to delete one Score
     *   }
     * })
     *
     */
    delete<T extends ScoreDeleteArgs>(
      args: SelectSubset<T, ScoreDeleteArgs<ExtArgs>>,
    ): Prisma__ScoreClient<
      $Result.GetResult<
        Prisma.$ScorePayload<ExtArgs>,
        T,
        'delete',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Update one Score.
     * @param {ScoreUpdateArgs} args - Arguments to update one Score.
     * @example
     * // Update one Score
     * const score = await prisma.score.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends ScoreUpdateArgs>(
      args: SelectSubset<T, ScoreUpdateArgs<ExtArgs>>,
    ): Prisma__ScoreClient<
      $Result.GetResult<
        Prisma.$ScorePayload<ExtArgs>,
        T,
        'update',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Delete zero or more Scores.
     * @param {ScoreDeleteManyArgs} args - Arguments to filter Scores to delete.
     * @example
     * // Delete a few Scores
     * const { count } = await prisma.score.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends ScoreDeleteManyArgs>(
      args?: SelectSubset<T, ScoreDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Scores.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScoreUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Scores
     * const score = await prisma.score.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends ScoreUpdateManyArgs>(
      args: SelectSubset<T, ScoreUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Scores and returns the data updated in the database.
     * @param {ScoreUpdateManyAndReturnArgs} args - Arguments to update many Scores.
     * @example
     * // Update many Scores
     * const score = await prisma.score.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Scores and only return the `id`
     * const scoreWithIdOnly = await prisma.score.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    updateManyAndReturn<T extends ScoreUpdateManyAndReturnArgs>(
      args: SelectSubset<T, ScoreUpdateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$ScorePayload<ExtArgs>,
        T,
        'updateManyAndReturn',
        GlobalOmitOptions
      >
    >;

    /**
     * Create or update one Score.
     * @param {ScoreUpsertArgs} args - Arguments to update or create a Score.
     * @example
     * // Update or create a Score
     * const score = await prisma.score.upsert({
     *   create: {
     *     // ... data to create a Score
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Score we want to update
     *   }
     * })
     */
    upsert<T extends ScoreUpsertArgs>(
      args: SelectSubset<T, ScoreUpsertArgs<ExtArgs>>,
    ): Prisma__ScoreClient<
      $Result.GetResult<
        Prisma.$ScorePayload<ExtArgs>,
        T,
        'upsert',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Count the number of Scores.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScoreCountArgs} args - Arguments to filter Scores to count.
     * @example
     * // Count the number of Scores
     * const count = await prisma.score.count({
     *   where: {
     *     // ... the filter for the Scores we want to count
     *   }
     * })
     **/
    count<T extends ScoreCountArgs>(
      args?: Subset<T, ScoreCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ScoreCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Score.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScoreAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends ScoreAggregateArgs>(
      args: Subset<T, ScoreAggregateArgs>,
    ): Prisma.PrismaPromise<GetScoreAggregateType<T>>;

    /**
     * Group by Score.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScoreGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends ScoreGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? {orderBy: ScoreGroupByArgs['orderBy']}
        : {orderBy?: ScoreGroupByArgs['orderBy']},
      OrderFields extends ExcludeUnderscoreKeys<
        Keys<MaybeTupleToUnion<T['orderBy']>>
      >,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
          ? {
              [P in HavingFields]: P extends ByFields
                ? never
                : P extends string
                  ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
                  : [
                      Error,
                      'Field ',
                      P,
                      ` in "having" needs to be provided in "by"`,
                    ];
            }[HavingFields]
          : 'take' extends Keys<T>
            ? 'orderBy' extends Keys<T>
              ? ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields]
              : 'Error: If you provide "take", you also need to provide "orderBy"'
            : 'skip' extends Keys<T>
              ? 'orderBy' extends Keys<T>
                ? ByValid extends True
                  ? {}
                  : {
                      [P in OrderFields]: P extends ByFields
                        ? never
                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                    }[OrderFields]
                : 'Error: If you provide "skip", you also need to provide "orderBy"'
              : ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields],
    >(
      args: SubsetIntersection<T, ScoreGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors
      ? GetScoreGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the Score model
     */
    readonly fields: ScoreFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Score.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ScoreClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    game<T extends GameDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, GameDefaultArgs<ExtArgs>>,
    ): Prisma__GameClient<
      | $Result.GetResult<
          Prisma.$GamePayload<ExtArgs>,
          T,
          'findUniqueOrThrow',
          GlobalOmitOptions
        >
      | Null,
      Null,
      ExtArgs,
      GlobalOmitOptions
    >;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?:
        | ((value: T) => TResult1 | PromiseLike<TResult1>)
        | undefined
        | null,
      onrejected?:
        | ((reason: any) => TResult2 | PromiseLike<TResult2>)
        | undefined
        | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?:
        | ((reason: any) => TResult | PromiseLike<TResult>)
        | undefined
        | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the Score model
   */
  interface ScoreFieldRefs {
    readonly id: FieldRef<'Score', 'String'>;
    readonly gameId: FieldRef<'Score', 'String'>;
    readonly score: FieldRef<'Score', 'Int'>;
    readonly createdAt: FieldRef<'Score', 'DateTime'>;
  }

  // Custom InputTypes
  /**
   * Score findUnique
   */
  export type ScoreFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Score
     */
    select?: ScoreSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Score
     */
    omit?: ScoreOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScoreInclude<ExtArgs> | null;
    /**
     * Filter, which Score to fetch.
     */
    where: ScoreWhereUniqueInput;
  };

  /**
   * Score findUniqueOrThrow
   */
  export type ScoreFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Score
     */
    select?: ScoreSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Score
     */
    omit?: ScoreOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScoreInclude<ExtArgs> | null;
    /**
     * Filter, which Score to fetch.
     */
    where: ScoreWhereUniqueInput;
  };

  /**
   * Score findFirst
   */
  export type ScoreFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Score
     */
    select?: ScoreSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Score
     */
    omit?: ScoreOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScoreInclude<ExtArgs> | null;
    /**
     * Filter, which Score to fetch.
     */
    where?: ScoreWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Scores to fetch.
     */
    orderBy?: ScoreOrderByWithRelationInput | ScoreOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Scores.
     */
    cursor?: ScoreWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Scores from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Scores.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Scores.
     */
    distinct?: ScoreScalarFieldEnum | ScoreScalarFieldEnum[];
  };

  /**
   * Score findFirstOrThrow
   */
  export type ScoreFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Score
     */
    select?: ScoreSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Score
     */
    omit?: ScoreOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScoreInclude<ExtArgs> | null;
    /**
     * Filter, which Score to fetch.
     */
    where?: ScoreWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Scores to fetch.
     */
    orderBy?: ScoreOrderByWithRelationInput | ScoreOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Scores.
     */
    cursor?: ScoreWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Scores from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Scores.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Scores.
     */
    distinct?: ScoreScalarFieldEnum | ScoreScalarFieldEnum[];
  };

  /**
   * Score findMany
   */
  export type ScoreFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Score
     */
    select?: ScoreSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Score
     */
    omit?: ScoreOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScoreInclude<ExtArgs> | null;
    /**
     * Filter, which Scores to fetch.
     */
    where?: ScoreWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Scores to fetch.
     */
    orderBy?: ScoreOrderByWithRelationInput | ScoreOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Scores.
     */
    cursor?: ScoreWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Scores from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Scores.
     */
    skip?: number;
    distinct?: ScoreScalarFieldEnum | ScoreScalarFieldEnum[];
  };

  /**
   * Score create
   */
  export type ScoreCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Score
     */
    select?: ScoreSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Score
     */
    omit?: ScoreOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScoreInclude<ExtArgs> | null;
    /**
     * The data needed to create a Score.
     */
    data: XOR<ScoreCreateInput, ScoreUncheckedCreateInput>;
  };

  /**
   * Score createMany
   */
  export type ScoreCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many Scores.
     */
    data: ScoreCreateManyInput | ScoreCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * Score createManyAndReturn
   */
  export type ScoreCreateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Score
     */
    select?: ScoreSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Score
     */
    omit?: ScoreOmit<ExtArgs> | null;
    /**
     * The data used to create many Scores.
     */
    data: ScoreCreateManyInput | ScoreCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScoreIncludeCreateManyAndReturn<ExtArgs> | null;
  };

  /**
   * Score update
   */
  export type ScoreUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Score
     */
    select?: ScoreSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Score
     */
    omit?: ScoreOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScoreInclude<ExtArgs> | null;
    /**
     * The data needed to update a Score.
     */
    data: XOR<ScoreUpdateInput, ScoreUncheckedUpdateInput>;
    /**
     * Choose, which Score to update.
     */
    where: ScoreWhereUniqueInput;
  };

  /**
   * Score updateMany
   */
  export type ScoreUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update Scores.
     */
    data: XOR<ScoreUpdateManyMutationInput, ScoreUncheckedUpdateManyInput>;
    /**
     * Filter which Scores to update
     */
    where?: ScoreWhereInput;
    /**
     * Limit how many Scores to update.
     */
    limit?: number;
  };

  /**
   * Score updateManyAndReturn
   */
  export type ScoreUpdateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Score
     */
    select?: ScoreSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Score
     */
    omit?: ScoreOmit<ExtArgs> | null;
    /**
     * The data used to update Scores.
     */
    data: XOR<ScoreUpdateManyMutationInput, ScoreUncheckedUpdateManyInput>;
    /**
     * Filter which Scores to update
     */
    where?: ScoreWhereInput;
    /**
     * Limit how many Scores to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScoreIncludeUpdateManyAndReturn<ExtArgs> | null;
  };

  /**
   * Score upsert
   */
  export type ScoreUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Score
     */
    select?: ScoreSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Score
     */
    omit?: ScoreOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScoreInclude<ExtArgs> | null;
    /**
     * The filter to search for the Score to update in case it exists.
     */
    where: ScoreWhereUniqueInput;
    /**
     * In case the Score found by the `where` argument doesn't exist, create a new Score with this data.
     */
    create: XOR<ScoreCreateInput, ScoreUncheckedCreateInput>;
    /**
     * In case the Score was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ScoreUpdateInput, ScoreUncheckedUpdateInput>;
  };

  /**
   * Score delete
   */
  export type ScoreDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Score
     */
    select?: ScoreSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Score
     */
    omit?: ScoreOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScoreInclude<ExtArgs> | null;
    /**
     * Filter which Score to delete.
     */
    where: ScoreWhereUniqueInput;
  };

  /**
   * Score deleteMany
   */
  export type ScoreDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Scores to delete
     */
    where?: ScoreWhereInput;
    /**
     * Limit how many Scores to delete.
     */
    limit?: number;
  };

  /**
   * Score without action
   */
  export type ScoreDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Score
     */
    select?: ScoreSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Score
     */
    omit?: ScoreOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScoreInclude<ExtArgs> | null;
  };

  /**
   * Model Stats
   */

  export type AggregateStats = {
    _count: StatsCountAggregateOutputType | null;
    _avg: StatsAvgAggregateOutputType | null;
    _sum: StatsSumAggregateOutputType | null;
    _min: StatsMinAggregateOutputType | null;
    _max: StatsMaxAggregateOutputType | null;
  };

  export type StatsAvgAggregateOutputType = {
    plays: number | null;
    bestScore: number | null;
  };

  export type StatsSumAggregateOutputType = {
    plays: number | null;
    bestScore: number | null;
  };

  export type StatsMinAggregateOutputType = {
    id: string | null;
    gameId: string | null;
    plays: number | null;
    bestScore: number | null;
    createdAt: Date | null;
  };

  export type StatsMaxAggregateOutputType = {
    id: string | null;
    gameId: string | null;
    plays: number | null;
    bestScore: number | null;
    createdAt: Date | null;
  };

  export type StatsCountAggregateOutputType = {
    id: number;
    gameId: number;
    plays: number;
    bestScore: number;
    createdAt: number;
    _all: number;
  };

  export type StatsAvgAggregateInputType = {
    plays?: true;
    bestScore?: true;
  };

  export type StatsSumAggregateInputType = {
    plays?: true;
    bestScore?: true;
  };

  export type StatsMinAggregateInputType = {
    id?: true;
    gameId?: true;
    plays?: true;
    bestScore?: true;
    createdAt?: true;
  };

  export type StatsMaxAggregateInputType = {
    id?: true;
    gameId?: true;
    plays?: true;
    bestScore?: true;
    createdAt?: true;
  };

  export type StatsCountAggregateInputType = {
    id?: true;
    gameId?: true;
    plays?: true;
    bestScore?: true;
    createdAt?: true;
    _all?: true;
  };

  export type StatsAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Stats to aggregate.
     */
    where?: StatsWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Stats to fetch.
     */
    orderBy?: StatsOrderByWithRelationInput | StatsOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: StatsWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Stats from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Stats.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Stats
     **/
    _count?: true | StatsCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
     **/
    _avg?: StatsAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
     **/
    _sum?: StatsSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: StatsMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: StatsMaxAggregateInputType;
  };

  export type GetStatsAggregateType<T extends StatsAggregateArgs> = {
    [P in keyof T & keyof AggregateStats]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStats[P]>
      : GetScalarType<T[P], AggregateStats[P]>;
  };

  export type StatsGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: StatsWhereInput;
    orderBy?:
      | StatsOrderByWithAggregationInput
      | StatsOrderByWithAggregationInput[];
    by: StatsScalarFieldEnum[] | StatsScalarFieldEnum;
    having?: StatsScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: StatsCountAggregateInputType | true;
    _avg?: StatsAvgAggregateInputType;
    _sum?: StatsSumAggregateInputType;
    _min?: StatsMinAggregateInputType;
    _max?: StatsMaxAggregateInputType;
  };

  export type StatsGroupByOutputType = {
    id: string;
    gameId: string;
    plays: number;
    bestScore: number;
    createdAt: Date;
    _count: StatsCountAggregateOutputType | null;
    _avg: StatsAvgAggregateOutputType | null;
    _sum: StatsSumAggregateOutputType | null;
    _min: StatsMinAggregateOutputType | null;
    _max: StatsMaxAggregateOutputType | null;
  };

  type GetStatsGroupByPayload<T extends StatsGroupByArgs> =
    Prisma.PrismaPromise<
      Array<
        PickEnumerable<StatsGroupByOutputType, T['by']> & {
          [P in keyof T & keyof StatsGroupByOutputType]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StatsGroupByOutputType[P]>
            : GetScalarType<T[P], StatsGroupByOutputType[P]>;
        }
      >
    >;

  export type StatsSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      gameId?: boolean;
      plays?: boolean;
      bestScore?: boolean;
      createdAt?: boolean;
      game?: boolean | GameDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['stats']
  >;

  export type StatsSelectCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      gameId?: boolean;
      plays?: boolean;
      bestScore?: boolean;
      createdAt?: boolean;
      game?: boolean | GameDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['stats']
  >;

  export type StatsSelectUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      gameId?: boolean;
      plays?: boolean;
      bestScore?: boolean;
      createdAt?: boolean;
      game?: boolean | GameDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['stats']
  >;

  export type StatsSelectScalar = {
    id?: boolean;
    gameId?: boolean;
    plays?: boolean;
    bestScore?: boolean;
    createdAt?: boolean;
  };

  export type StatsOmit<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetOmit<
    'id' | 'gameId' | 'plays' | 'bestScore' | 'createdAt',
    ExtArgs['result']['stats']
  >;
  export type StatsInclude<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    game?: boolean | GameDefaultArgs<ExtArgs>;
  };
  export type StatsIncludeCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    game?: boolean | GameDefaultArgs<ExtArgs>;
  };
  export type StatsIncludeUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    game?: boolean | GameDefaultArgs<ExtArgs>;
  };

  export type $StatsPayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    name: 'Stats';
    objects: {
      game: Prisma.$GamePayload<ExtArgs>;
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        gameId: string;
        plays: number;
        bestScore: number;
        createdAt: Date;
      },
      ExtArgs['result']['stats']
    >;
    composites: {};
  };

  type StatsGetPayload<
    S extends boolean | null | undefined | StatsDefaultArgs,
  > = $Result.GetResult<Prisma.$StatsPayload, S>;

  type StatsCountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = Omit<StatsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: StatsCountAggregateInputType | true;
  };

  export interface StatsDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>['model']['Stats'];
      meta: {name: 'Stats'};
    };
    /**
     * Find zero or one Stats that matches the filter.
     * @param {StatsFindUniqueArgs} args - Arguments to find a Stats
     * @example
     * // Get one Stats
     * const stats = await prisma.stats.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends StatsFindUniqueArgs>(
      args: SelectSubset<T, StatsFindUniqueArgs<ExtArgs>>,
    ): Prisma__StatsClient<
      $Result.GetResult<
        Prisma.$StatsPayload<ExtArgs>,
        T,
        'findUnique',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find one Stats that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {StatsFindUniqueOrThrowArgs} args - Arguments to find a Stats
     * @example
     * // Get one Stats
     * const stats = await prisma.stats.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends StatsFindUniqueOrThrowArgs>(
      args: SelectSubset<T, StatsFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__StatsClient<
      $Result.GetResult<
        Prisma.$StatsPayload<ExtArgs>,
        T,
        'findUniqueOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first Stats that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StatsFindFirstArgs} args - Arguments to find a Stats
     * @example
     * // Get one Stats
     * const stats = await prisma.stats.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends StatsFindFirstArgs>(
      args?: SelectSubset<T, StatsFindFirstArgs<ExtArgs>>,
    ): Prisma__StatsClient<
      $Result.GetResult<
        Prisma.$StatsPayload<ExtArgs>,
        T,
        'findFirst',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first Stats that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StatsFindFirstOrThrowArgs} args - Arguments to find a Stats
     * @example
     * // Get one Stats
     * const stats = await prisma.stats.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends StatsFindFirstOrThrowArgs>(
      args?: SelectSubset<T, StatsFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__StatsClient<
      $Result.GetResult<
        Prisma.$StatsPayload<ExtArgs>,
        T,
        'findFirstOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find zero or more Stats that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StatsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Stats
     * const stats = await prisma.stats.findMany()
     *
     * // Get first 10 Stats
     * const stats = await prisma.stats.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const statsWithIdOnly = await prisma.stats.findMany({ select: { id: true } })
     *
     */
    findMany<T extends StatsFindManyArgs>(
      args?: SelectSubset<T, StatsFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$StatsPayload<ExtArgs>,
        T,
        'findMany',
        GlobalOmitOptions
      >
    >;

    /**
     * Create a Stats.
     * @param {StatsCreateArgs} args - Arguments to create a Stats.
     * @example
     * // Create one Stats
     * const Stats = await prisma.stats.create({
     *   data: {
     *     // ... data to create a Stats
     *   }
     * })
     *
     */
    create<T extends StatsCreateArgs>(
      args: SelectSubset<T, StatsCreateArgs<ExtArgs>>,
    ): Prisma__StatsClient<
      $Result.GetResult<
        Prisma.$StatsPayload<ExtArgs>,
        T,
        'create',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Create many Stats.
     * @param {StatsCreateManyArgs} args - Arguments to create many Stats.
     * @example
     * // Create many Stats
     * const stats = await prisma.stats.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends StatsCreateManyArgs>(
      args?: SelectSubset<T, StatsCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create many Stats and returns the data saved in the database.
     * @param {StatsCreateManyAndReturnArgs} args - Arguments to create many Stats.
     * @example
     * // Create many Stats
     * const stats = await prisma.stats.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Stats and only return the `id`
     * const statsWithIdOnly = await prisma.stats.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends StatsCreateManyAndReturnArgs>(
      args?: SelectSubset<T, StatsCreateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$StatsPayload<ExtArgs>,
        T,
        'createManyAndReturn',
        GlobalOmitOptions
      >
    >;

    /**
     * Delete a Stats.
     * @param {StatsDeleteArgs} args - Arguments to delete one Stats.
     * @example
     * // Delete one Stats
     * const Stats = await prisma.stats.delete({
     *   where: {
     *     // ... filter to delete one Stats
     *   }
     * })
     *
     */
    delete<T extends StatsDeleteArgs>(
      args: SelectSubset<T, StatsDeleteArgs<ExtArgs>>,
    ): Prisma__StatsClient<
      $Result.GetResult<
        Prisma.$StatsPayload<ExtArgs>,
        T,
        'delete',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Update one Stats.
     * @param {StatsUpdateArgs} args - Arguments to update one Stats.
     * @example
     * // Update one Stats
     * const stats = await prisma.stats.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends StatsUpdateArgs>(
      args: SelectSubset<T, StatsUpdateArgs<ExtArgs>>,
    ): Prisma__StatsClient<
      $Result.GetResult<
        Prisma.$StatsPayload<ExtArgs>,
        T,
        'update',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Delete zero or more Stats.
     * @param {StatsDeleteManyArgs} args - Arguments to filter Stats to delete.
     * @example
     * // Delete a few Stats
     * const { count } = await prisma.stats.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends StatsDeleteManyArgs>(
      args?: SelectSubset<T, StatsDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Stats.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StatsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Stats
     * const stats = await prisma.stats.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends StatsUpdateManyArgs>(
      args: SelectSubset<T, StatsUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Stats and returns the data updated in the database.
     * @param {StatsUpdateManyAndReturnArgs} args - Arguments to update many Stats.
     * @example
     * // Update many Stats
     * const stats = await prisma.stats.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Stats and only return the `id`
     * const statsWithIdOnly = await prisma.stats.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    updateManyAndReturn<T extends StatsUpdateManyAndReturnArgs>(
      args: SelectSubset<T, StatsUpdateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$StatsPayload<ExtArgs>,
        T,
        'updateManyAndReturn',
        GlobalOmitOptions
      >
    >;

    /**
     * Create or update one Stats.
     * @param {StatsUpsertArgs} args - Arguments to update or create a Stats.
     * @example
     * // Update or create a Stats
     * const stats = await prisma.stats.upsert({
     *   create: {
     *     // ... data to create a Stats
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Stats we want to update
     *   }
     * })
     */
    upsert<T extends StatsUpsertArgs>(
      args: SelectSubset<T, StatsUpsertArgs<ExtArgs>>,
    ): Prisma__StatsClient<
      $Result.GetResult<
        Prisma.$StatsPayload<ExtArgs>,
        T,
        'upsert',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Count the number of Stats.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StatsCountArgs} args - Arguments to filter Stats to count.
     * @example
     * // Count the number of Stats
     * const count = await prisma.stats.count({
     *   where: {
     *     // ... the filter for the Stats we want to count
     *   }
     * })
     **/
    count<T extends StatsCountArgs>(
      args?: Subset<T, StatsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StatsCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Stats.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StatsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends StatsAggregateArgs>(
      args: Subset<T, StatsAggregateArgs>,
    ): Prisma.PrismaPromise<GetStatsAggregateType<T>>;

    /**
     * Group by Stats.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StatsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends StatsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? {orderBy: StatsGroupByArgs['orderBy']}
        : {orderBy?: StatsGroupByArgs['orderBy']},
      OrderFields extends ExcludeUnderscoreKeys<
        Keys<MaybeTupleToUnion<T['orderBy']>>
      >,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
          ? {
              [P in HavingFields]: P extends ByFields
                ? never
                : P extends string
                  ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
                  : [
                      Error,
                      'Field ',
                      P,
                      ` in "having" needs to be provided in "by"`,
                    ];
            }[HavingFields]
          : 'take' extends Keys<T>
            ? 'orderBy' extends Keys<T>
              ? ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields]
              : 'Error: If you provide "take", you also need to provide "orderBy"'
            : 'skip' extends Keys<T>
              ? 'orderBy' extends Keys<T>
                ? ByValid extends True
                  ? {}
                  : {
                      [P in OrderFields]: P extends ByFields
                        ? never
                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                    }[OrderFields]
                : 'Error: If you provide "skip", you also need to provide "orderBy"'
              : ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields],
    >(
      args: SubsetIntersection<T, StatsGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors
      ? GetStatsGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the Stats model
     */
    readonly fields: StatsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Stats.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__StatsClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    game<T extends GameDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, GameDefaultArgs<ExtArgs>>,
    ): Prisma__GameClient<
      | $Result.GetResult<
          Prisma.$GamePayload<ExtArgs>,
          T,
          'findUniqueOrThrow',
          GlobalOmitOptions
        >
      | Null,
      Null,
      ExtArgs,
      GlobalOmitOptions
    >;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?:
        | ((value: T) => TResult1 | PromiseLike<TResult1>)
        | undefined
        | null,
      onrejected?:
        | ((reason: any) => TResult2 | PromiseLike<TResult2>)
        | undefined
        | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?:
        | ((reason: any) => TResult | PromiseLike<TResult>)
        | undefined
        | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the Stats model
   */
  interface StatsFieldRefs {
    readonly id: FieldRef<'Stats', 'String'>;
    readonly gameId: FieldRef<'Stats', 'String'>;
    readonly plays: FieldRef<'Stats', 'Int'>;
    readonly bestScore: FieldRef<'Stats', 'Int'>;
    readonly createdAt: FieldRef<'Stats', 'DateTime'>;
  }

  // Custom InputTypes
  /**
   * Stats findUnique
   */
  export type StatsFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Stats
     */
    select?: StatsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Stats
     */
    omit?: StatsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StatsInclude<ExtArgs> | null;
    /**
     * Filter, which Stats to fetch.
     */
    where: StatsWhereUniqueInput;
  };

  /**
   * Stats findUniqueOrThrow
   */
  export type StatsFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Stats
     */
    select?: StatsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Stats
     */
    omit?: StatsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StatsInclude<ExtArgs> | null;
    /**
     * Filter, which Stats to fetch.
     */
    where: StatsWhereUniqueInput;
  };

  /**
   * Stats findFirst
   */
  export type StatsFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Stats
     */
    select?: StatsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Stats
     */
    omit?: StatsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StatsInclude<ExtArgs> | null;
    /**
     * Filter, which Stats to fetch.
     */
    where?: StatsWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Stats to fetch.
     */
    orderBy?: StatsOrderByWithRelationInput | StatsOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Stats.
     */
    cursor?: StatsWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Stats from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Stats.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Stats.
     */
    distinct?: StatsScalarFieldEnum | StatsScalarFieldEnum[];
  };

  /**
   * Stats findFirstOrThrow
   */
  export type StatsFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Stats
     */
    select?: StatsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Stats
     */
    omit?: StatsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StatsInclude<ExtArgs> | null;
    /**
     * Filter, which Stats to fetch.
     */
    where?: StatsWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Stats to fetch.
     */
    orderBy?: StatsOrderByWithRelationInput | StatsOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Stats.
     */
    cursor?: StatsWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Stats from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Stats.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Stats.
     */
    distinct?: StatsScalarFieldEnum | StatsScalarFieldEnum[];
  };

  /**
   * Stats findMany
   */
  export type StatsFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Stats
     */
    select?: StatsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Stats
     */
    omit?: StatsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StatsInclude<ExtArgs> | null;
    /**
     * Filter, which Stats to fetch.
     */
    where?: StatsWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Stats to fetch.
     */
    orderBy?: StatsOrderByWithRelationInput | StatsOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Stats.
     */
    cursor?: StatsWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Stats from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Stats.
     */
    skip?: number;
    distinct?: StatsScalarFieldEnum | StatsScalarFieldEnum[];
  };

  /**
   * Stats create
   */
  export type StatsCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Stats
     */
    select?: StatsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Stats
     */
    omit?: StatsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StatsInclude<ExtArgs> | null;
    /**
     * The data needed to create a Stats.
     */
    data: XOR<StatsCreateInput, StatsUncheckedCreateInput>;
  };

  /**
   * Stats createMany
   */
  export type StatsCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many Stats.
     */
    data: StatsCreateManyInput | StatsCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * Stats createManyAndReturn
   */
  export type StatsCreateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Stats
     */
    select?: StatsSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Stats
     */
    omit?: StatsOmit<ExtArgs> | null;
    /**
     * The data used to create many Stats.
     */
    data: StatsCreateManyInput | StatsCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StatsIncludeCreateManyAndReturn<ExtArgs> | null;
  };

  /**
   * Stats update
   */
  export type StatsUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Stats
     */
    select?: StatsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Stats
     */
    omit?: StatsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StatsInclude<ExtArgs> | null;
    /**
     * The data needed to update a Stats.
     */
    data: XOR<StatsUpdateInput, StatsUncheckedUpdateInput>;
    /**
     * Choose, which Stats to update.
     */
    where: StatsWhereUniqueInput;
  };

  /**
   * Stats updateMany
   */
  export type StatsUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update Stats.
     */
    data: XOR<StatsUpdateManyMutationInput, StatsUncheckedUpdateManyInput>;
    /**
     * Filter which Stats to update
     */
    where?: StatsWhereInput;
    /**
     * Limit how many Stats to update.
     */
    limit?: number;
  };

  /**
   * Stats updateManyAndReturn
   */
  export type StatsUpdateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Stats
     */
    select?: StatsSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Stats
     */
    omit?: StatsOmit<ExtArgs> | null;
    /**
     * The data used to update Stats.
     */
    data: XOR<StatsUpdateManyMutationInput, StatsUncheckedUpdateManyInput>;
    /**
     * Filter which Stats to update
     */
    where?: StatsWhereInput;
    /**
     * Limit how many Stats to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StatsIncludeUpdateManyAndReturn<ExtArgs> | null;
  };

  /**
   * Stats upsert
   */
  export type StatsUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Stats
     */
    select?: StatsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Stats
     */
    omit?: StatsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StatsInclude<ExtArgs> | null;
    /**
     * The filter to search for the Stats to update in case it exists.
     */
    where: StatsWhereUniqueInput;
    /**
     * In case the Stats found by the `where` argument doesn't exist, create a new Stats with this data.
     */
    create: XOR<StatsCreateInput, StatsUncheckedCreateInput>;
    /**
     * In case the Stats was found with the provided `where` argument, update it with this data.
     */
    update: XOR<StatsUpdateInput, StatsUncheckedUpdateInput>;
  };

  /**
   * Stats delete
   */
  export type StatsDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Stats
     */
    select?: StatsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Stats
     */
    omit?: StatsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StatsInclude<ExtArgs> | null;
    /**
     * Filter which Stats to delete.
     */
    where: StatsWhereUniqueInput;
  };

  /**
   * Stats deleteMany
   */
  export type StatsDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Stats to delete
     */
    where?: StatsWhereInput;
    /**
     * Limit how many Stats to delete.
     */
    limit?: number;
  };

  /**
   * Stats without action
   */
  export type StatsDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Stats
     */
    select?: StatsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Stats
     */
    omit?: StatsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StatsInclude<ExtArgs> | null;
  };

  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted';
    ReadCommitted: 'ReadCommitted';
    RepeatableRead: 'RepeatableRead';
    Serializable: 'Serializable';
  };

  export type TransactionIsolationLevel =
    (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel];

  export const GameScalarFieldEnum: {
    id: 'id';
    name: 'name';
    slug: 'slug';
    createdAt: 'createdAt';
  };

  export type GameScalarFieldEnum =
    (typeof GameScalarFieldEnum)[keyof typeof GameScalarFieldEnum];

  export const ScoreScalarFieldEnum: {
    id: 'id';
    gameId: 'gameId';
    score: 'score';
    createdAt: 'createdAt';
  };

  export type ScoreScalarFieldEnum =
    (typeof ScoreScalarFieldEnum)[keyof typeof ScoreScalarFieldEnum];

  export const StatsScalarFieldEnum: {
    id: 'id';
    gameId: 'gameId';
    plays: 'plays';
    bestScore: 'bestScore';
    createdAt: 'createdAt';
  };

  export type StatsScalarFieldEnum =
    (typeof StatsScalarFieldEnum)[keyof typeof StatsScalarFieldEnum];

  export const SortOrder: {
    asc: 'asc';
    desc: 'desc';
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder];

  export const QueryMode: {
    default: 'default';
    insensitive: 'insensitive';
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode];

  /**
   * Field references
   */

  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'String'
  >;

  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'String[]'
  >;

  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'DateTime'
  >;

  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'DateTime[]'
  >;

  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'Int'
  >;

  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'Int[]'
  >;

  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'Float'
  >;

  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'Float[]'
  >;

  /**
   * Deep Input Types
   */

  export type GameWhereInput = {
    AND?: GameWhereInput | GameWhereInput[];
    OR?: GameWhereInput[];
    NOT?: GameWhereInput | GameWhereInput[];
    id?: StringFilter<'Game'> | string;
    name?: StringFilter<'Game'> | string;
    slug?: StringFilter<'Game'> | string;
    createdAt?: DateTimeFilter<'Game'> | Date | string;
    Score?: ScoreListRelationFilter;
    Stats?: StatsListRelationFilter;
  };

  export type GameOrderByWithRelationInput = {
    id?: SortOrder;
    name?: SortOrder;
    slug?: SortOrder;
    createdAt?: SortOrder;
    Score?: ScoreOrderByRelationAggregateInput;
    Stats?: StatsOrderByRelationAggregateInput;
  };

  export type GameWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      slug?: string;
      AND?: GameWhereInput | GameWhereInput[];
      OR?: GameWhereInput[];
      NOT?: GameWhereInput | GameWhereInput[];
      name?: StringFilter<'Game'> | string;
      createdAt?: DateTimeFilter<'Game'> | Date | string;
      Score?: ScoreListRelationFilter;
      Stats?: StatsListRelationFilter;
    },
    'id' | 'slug'
  >;

  export type GameOrderByWithAggregationInput = {
    id?: SortOrder;
    name?: SortOrder;
    slug?: SortOrder;
    createdAt?: SortOrder;
    _count?: GameCountOrderByAggregateInput;
    _max?: GameMaxOrderByAggregateInput;
    _min?: GameMinOrderByAggregateInput;
  };

  export type GameScalarWhereWithAggregatesInput = {
    AND?:
      | GameScalarWhereWithAggregatesInput
      | GameScalarWhereWithAggregatesInput[];
    OR?: GameScalarWhereWithAggregatesInput[];
    NOT?:
      | GameScalarWhereWithAggregatesInput
      | GameScalarWhereWithAggregatesInput[];
    id?: StringWithAggregatesFilter<'Game'> | string;
    name?: StringWithAggregatesFilter<'Game'> | string;
    slug?: StringWithAggregatesFilter<'Game'> | string;
    createdAt?: DateTimeWithAggregatesFilter<'Game'> | Date | string;
  };

  export type ScoreWhereInput = {
    AND?: ScoreWhereInput | ScoreWhereInput[];
    OR?: ScoreWhereInput[];
    NOT?: ScoreWhereInput | ScoreWhereInput[];
    id?: StringFilter<'Score'> | string;
    gameId?: StringFilter<'Score'> | string;
    score?: IntFilter<'Score'> | number;
    createdAt?: DateTimeFilter<'Score'> | Date | string;
    game?: XOR<GameScalarRelationFilter, GameWhereInput>;
  };

  export type ScoreOrderByWithRelationInput = {
    id?: SortOrder;
    gameId?: SortOrder;
    score?: SortOrder;
    createdAt?: SortOrder;
    game?: GameOrderByWithRelationInput;
  };

  export type ScoreWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: ScoreWhereInput | ScoreWhereInput[];
      OR?: ScoreWhereInput[];
      NOT?: ScoreWhereInput | ScoreWhereInput[];
      gameId?: StringFilter<'Score'> | string;
      score?: IntFilter<'Score'> | number;
      createdAt?: DateTimeFilter<'Score'> | Date | string;
      game?: XOR<GameScalarRelationFilter, GameWhereInput>;
    },
    'id'
  >;

  export type ScoreOrderByWithAggregationInput = {
    id?: SortOrder;
    gameId?: SortOrder;
    score?: SortOrder;
    createdAt?: SortOrder;
    _count?: ScoreCountOrderByAggregateInput;
    _avg?: ScoreAvgOrderByAggregateInput;
    _max?: ScoreMaxOrderByAggregateInput;
    _min?: ScoreMinOrderByAggregateInput;
    _sum?: ScoreSumOrderByAggregateInput;
  };

  export type ScoreScalarWhereWithAggregatesInput = {
    AND?:
      | ScoreScalarWhereWithAggregatesInput
      | ScoreScalarWhereWithAggregatesInput[];
    OR?: ScoreScalarWhereWithAggregatesInput[];
    NOT?:
      | ScoreScalarWhereWithAggregatesInput
      | ScoreScalarWhereWithAggregatesInput[];
    id?: StringWithAggregatesFilter<'Score'> | string;
    gameId?: StringWithAggregatesFilter<'Score'> | string;
    score?: IntWithAggregatesFilter<'Score'> | number;
    createdAt?: DateTimeWithAggregatesFilter<'Score'> | Date | string;
  };

  export type StatsWhereInput = {
    AND?: StatsWhereInput | StatsWhereInput[];
    OR?: StatsWhereInput[];
    NOT?: StatsWhereInput | StatsWhereInput[];
    id?: StringFilter<'Stats'> | string;
    gameId?: StringFilter<'Stats'> | string;
    plays?: IntFilter<'Stats'> | number;
    bestScore?: IntFilter<'Stats'> | number;
    createdAt?: DateTimeFilter<'Stats'> | Date | string;
    game?: XOR<GameScalarRelationFilter, GameWhereInput>;
  };

  export type StatsOrderByWithRelationInput = {
    id?: SortOrder;
    gameId?: SortOrder;
    plays?: SortOrder;
    bestScore?: SortOrder;
    createdAt?: SortOrder;
    game?: GameOrderByWithRelationInput;
  };

  export type StatsWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: StatsWhereInput | StatsWhereInput[];
      OR?: StatsWhereInput[];
      NOT?: StatsWhereInput | StatsWhereInput[];
      gameId?: StringFilter<'Stats'> | string;
      plays?: IntFilter<'Stats'> | number;
      bestScore?: IntFilter<'Stats'> | number;
      createdAt?: DateTimeFilter<'Stats'> | Date | string;
      game?: XOR<GameScalarRelationFilter, GameWhereInput>;
    },
    'id'
  >;

  export type StatsOrderByWithAggregationInput = {
    id?: SortOrder;
    gameId?: SortOrder;
    plays?: SortOrder;
    bestScore?: SortOrder;
    createdAt?: SortOrder;
    _count?: StatsCountOrderByAggregateInput;
    _avg?: StatsAvgOrderByAggregateInput;
    _max?: StatsMaxOrderByAggregateInput;
    _min?: StatsMinOrderByAggregateInput;
    _sum?: StatsSumOrderByAggregateInput;
  };

  export type StatsScalarWhereWithAggregatesInput = {
    AND?:
      | StatsScalarWhereWithAggregatesInput
      | StatsScalarWhereWithAggregatesInput[];
    OR?: StatsScalarWhereWithAggregatesInput[];
    NOT?:
      | StatsScalarWhereWithAggregatesInput
      | StatsScalarWhereWithAggregatesInput[];
    id?: StringWithAggregatesFilter<'Stats'> | string;
    gameId?: StringWithAggregatesFilter<'Stats'> | string;
    plays?: IntWithAggregatesFilter<'Stats'> | number;
    bestScore?: IntWithAggregatesFilter<'Stats'> | number;
    createdAt?: DateTimeWithAggregatesFilter<'Stats'> | Date | string;
  };

  export type GameCreateInput = {
    id?: string;
    name: string;
    slug: string;
    createdAt?: Date | string;
    Score?: ScoreCreateNestedManyWithoutGameInput;
    Stats?: StatsCreateNestedManyWithoutGameInput;
  };

  export type GameUncheckedCreateInput = {
    id?: string;
    name: string;
    slug: string;
    createdAt?: Date | string;
    Score?: ScoreUncheckedCreateNestedManyWithoutGameInput;
    Stats?: StatsUncheckedCreateNestedManyWithoutGameInput;
  };

  export type GameUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    slug?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    Score?: ScoreUpdateManyWithoutGameNestedInput;
    Stats?: StatsUpdateManyWithoutGameNestedInput;
  };

  export type GameUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    slug?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    Score?: ScoreUncheckedUpdateManyWithoutGameNestedInput;
    Stats?: StatsUncheckedUpdateManyWithoutGameNestedInput;
  };

  export type GameCreateManyInput = {
    id?: string;
    name: string;
    slug: string;
    createdAt?: Date | string;
  };

  export type GameUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    slug?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type GameUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    slug?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type ScoreCreateInput = {
    id?: string;
    score: number;
    createdAt?: Date | string;
    game: GameCreateNestedOneWithoutScoreInput;
  };

  export type ScoreUncheckedCreateInput = {
    id?: string;
    gameId: string;
    score: number;
    createdAt?: Date | string;
  };

  export type ScoreUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    score?: IntFieldUpdateOperationsInput | number;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    game?: GameUpdateOneRequiredWithoutScoreNestedInput;
  };

  export type ScoreUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    gameId?: StringFieldUpdateOperationsInput | string;
    score?: IntFieldUpdateOperationsInput | number;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type ScoreCreateManyInput = {
    id?: string;
    gameId: string;
    score: number;
    createdAt?: Date | string;
  };

  export type ScoreUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    score?: IntFieldUpdateOperationsInput | number;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type ScoreUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    gameId?: StringFieldUpdateOperationsInput | string;
    score?: IntFieldUpdateOperationsInput | number;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type StatsCreateInput = {
    id?: string;
    plays?: number;
    bestScore?: number;
    createdAt?: Date | string;
    game: GameCreateNestedOneWithoutStatsInput;
  };

  export type StatsUncheckedCreateInput = {
    id?: string;
    gameId: string;
    plays?: number;
    bestScore?: number;
    createdAt?: Date | string;
  };

  export type StatsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    plays?: IntFieldUpdateOperationsInput | number;
    bestScore?: IntFieldUpdateOperationsInput | number;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    game?: GameUpdateOneRequiredWithoutStatsNestedInput;
  };

  export type StatsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    gameId?: StringFieldUpdateOperationsInput | string;
    plays?: IntFieldUpdateOperationsInput | number;
    bestScore?: IntFieldUpdateOperationsInput | number;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type StatsCreateManyInput = {
    id?: string;
    gameId: string;
    plays?: number;
    bestScore?: number;
    createdAt?: Date | string;
  };

  export type StatsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    plays?: IntFieldUpdateOperationsInput | number;
    bestScore?: IntFieldUpdateOperationsInput | number;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type StatsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    gameId?: StringFieldUpdateOperationsInput | string;
    plays?: IntFieldUpdateOperationsInput | number;
    bestScore?: IntFieldUpdateOperationsInput | number;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedStringFilter<$PrismaModel> | string;
  };

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string;
  };

  export type ScoreListRelationFilter = {
    every?: ScoreWhereInput;
    some?: ScoreWhereInput;
    none?: ScoreWhereInput;
  };

  export type StatsListRelationFilter = {
    every?: StatsWhereInput;
    some?: StatsWhereInput;
    none?: StatsWhereInput;
  };

  export type ScoreOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type StatsOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type GameCountOrderByAggregateInput = {
    id?: SortOrder;
    name?: SortOrder;
    slug?: SortOrder;
    createdAt?: SortOrder;
  };

  export type GameMaxOrderByAggregateInput = {
    id?: SortOrder;
    name?: SortOrder;
    slug?: SortOrder;
    createdAt?: SortOrder;
  };

  export type GameMinOrderByAggregateInput = {
    id?: SortOrder;
    name?: SortOrder;
    slug?: SortOrder;
    createdAt?: SortOrder;
  };

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedStringFilter<$PrismaModel>;
    _max?: NestedStringFilter<$PrismaModel>;
  };

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedDateTimeFilter<$PrismaModel>;
    _max?: NestedDateTimeFilter<$PrismaModel>;
  };

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>;
    in?: number[] | ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntFilter<$PrismaModel> | number;
  };

  export type GameScalarRelationFilter = {
    is?: GameWhereInput;
    isNot?: GameWhereInput;
  };

  export type ScoreCountOrderByAggregateInput = {
    id?: SortOrder;
    gameId?: SortOrder;
    score?: SortOrder;
    createdAt?: SortOrder;
  };

  export type ScoreAvgOrderByAggregateInput = {
    score?: SortOrder;
  };

  export type ScoreMaxOrderByAggregateInput = {
    id?: SortOrder;
    gameId?: SortOrder;
    score?: SortOrder;
    createdAt?: SortOrder;
  };

  export type ScoreMinOrderByAggregateInput = {
    id?: SortOrder;
    gameId?: SortOrder;
    score?: SortOrder;
    createdAt?: SortOrder;
  };

  export type ScoreSumOrderByAggregateInput = {
    score?: SortOrder;
  };

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>;
    in?: number[] | ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number;
    _count?: NestedIntFilter<$PrismaModel>;
    _avg?: NestedFloatFilter<$PrismaModel>;
    _sum?: NestedIntFilter<$PrismaModel>;
    _min?: NestedIntFilter<$PrismaModel>;
    _max?: NestedIntFilter<$PrismaModel>;
  };

  export type StatsCountOrderByAggregateInput = {
    id?: SortOrder;
    gameId?: SortOrder;
    plays?: SortOrder;
    bestScore?: SortOrder;
    createdAt?: SortOrder;
  };

  export type StatsAvgOrderByAggregateInput = {
    plays?: SortOrder;
    bestScore?: SortOrder;
  };

  export type StatsMaxOrderByAggregateInput = {
    id?: SortOrder;
    gameId?: SortOrder;
    plays?: SortOrder;
    bestScore?: SortOrder;
    createdAt?: SortOrder;
  };

  export type StatsMinOrderByAggregateInput = {
    id?: SortOrder;
    gameId?: SortOrder;
    plays?: SortOrder;
    bestScore?: SortOrder;
    createdAt?: SortOrder;
  };

  export type StatsSumOrderByAggregateInput = {
    plays?: SortOrder;
    bestScore?: SortOrder;
  };

  export type ScoreCreateNestedManyWithoutGameInput = {
    create?:
      | XOR<ScoreCreateWithoutGameInput, ScoreUncheckedCreateWithoutGameInput>
      | ScoreCreateWithoutGameInput[]
      | ScoreUncheckedCreateWithoutGameInput[];
    connectOrCreate?:
      | ScoreCreateOrConnectWithoutGameInput
      | ScoreCreateOrConnectWithoutGameInput[];
    createMany?: ScoreCreateManyGameInputEnvelope;
    connect?: ScoreWhereUniqueInput | ScoreWhereUniqueInput[];
  };

  export type StatsCreateNestedManyWithoutGameInput = {
    create?:
      | XOR<StatsCreateWithoutGameInput, StatsUncheckedCreateWithoutGameInput>
      | StatsCreateWithoutGameInput[]
      | StatsUncheckedCreateWithoutGameInput[];
    connectOrCreate?:
      | StatsCreateOrConnectWithoutGameInput
      | StatsCreateOrConnectWithoutGameInput[];
    createMany?: StatsCreateManyGameInputEnvelope;
    connect?: StatsWhereUniqueInput | StatsWhereUniqueInput[];
  };

  export type ScoreUncheckedCreateNestedManyWithoutGameInput = {
    create?:
      | XOR<ScoreCreateWithoutGameInput, ScoreUncheckedCreateWithoutGameInput>
      | ScoreCreateWithoutGameInput[]
      | ScoreUncheckedCreateWithoutGameInput[];
    connectOrCreate?:
      | ScoreCreateOrConnectWithoutGameInput
      | ScoreCreateOrConnectWithoutGameInput[];
    createMany?: ScoreCreateManyGameInputEnvelope;
    connect?: ScoreWhereUniqueInput | ScoreWhereUniqueInput[];
  };

  export type StatsUncheckedCreateNestedManyWithoutGameInput = {
    create?:
      | XOR<StatsCreateWithoutGameInput, StatsUncheckedCreateWithoutGameInput>
      | StatsCreateWithoutGameInput[]
      | StatsUncheckedCreateWithoutGameInput[];
    connectOrCreate?:
      | StatsCreateOrConnectWithoutGameInput
      | StatsCreateOrConnectWithoutGameInput[];
    createMany?: StatsCreateManyGameInputEnvelope;
    connect?: StatsWhereUniqueInput | StatsWhereUniqueInput[];
  };

  export type StringFieldUpdateOperationsInput = {
    set?: string;
  };

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string;
  };

  export type ScoreUpdateManyWithoutGameNestedInput = {
    create?:
      | XOR<ScoreCreateWithoutGameInput, ScoreUncheckedCreateWithoutGameInput>
      | ScoreCreateWithoutGameInput[]
      | ScoreUncheckedCreateWithoutGameInput[];
    connectOrCreate?:
      | ScoreCreateOrConnectWithoutGameInput
      | ScoreCreateOrConnectWithoutGameInput[];
    upsert?:
      | ScoreUpsertWithWhereUniqueWithoutGameInput
      | ScoreUpsertWithWhereUniqueWithoutGameInput[];
    createMany?: ScoreCreateManyGameInputEnvelope;
    set?: ScoreWhereUniqueInput | ScoreWhereUniqueInput[];
    disconnect?: ScoreWhereUniqueInput | ScoreWhereUniqueInput[];
    delete?: ScoreWhereUniqueInput | ScoreWhereUniqueInput[];
    connect?: ScoreWhereUniqueInput | ScoreWhereUniqueInput[];
    update?:
      | ScoreUpdateWithWhereUniqueWithoutGameInput
      | ScoreUpdateWithWhereUniqueWithoutGameInput[];
    updateMany?:
      | ScoreUpdateManyWithWhereWithoutGameInput
      | ScoreUpdateManyWithWhereWithoutGameInput[];
    deleteMany?: ScoreScalarWhereInput | ScoreScalarWhereInput[];
  };

  export type StatsUpdateManyWithoutGameNestedInput = {
    create?:
      | XOR<StatsCreateWithoutGameInput, StatsUncheckedCreateWithoutGameInput>
      | StatsCreateWithoutGameInput[]
      | StatsUncheckedCreateWithoutGameInput[];
    connectOrCreate?:
      | StatsCreateOrConnectWithoutGameInput
      | StatsCreateOrConnectWithoutGameInput[];
    upsert?:
      | StatsUpsertWithWhereUniqueWithoutGameInput
      | StatsUpsertWithWhereUniqueWithoutGameInput[];
    createMany?: StatsCreateManyGameInputEnvelope;
    set?: StatsWhereUniqueInput | StatsWhereUniqueInput[];
    disconnect?: StatsWhereUniqueInput | StatsWhereUniqueInput[];
    delete?: StatsWhereUniqueInput | StatsWhereUniqueInput[];
    connect?: StatsWhereUniqueInput | StatsWhereUniqueInput[];
    update?:
      | StatsUpdateWithWhereUniqueWithoutGameInput
      | StatsUpdateWithWhereUniqueWithoutGameInput[];
    updateMany?:
      | StatsUpdateManyWithWhereWithoutGameInput
      | StatsUpdateManyWithWhereWithoutGameInput[];
    deleteMany?: StatsScalarWhereInput | StatsScalarWhereInput[];
  };

  export type ScoreUncheckedUpdateManyWithoutGameNestedInput = {
    create?:
      | XOR<ScoreCreateWithoutGameInput, ScoreUncheckedCreateWithoutGameInput>
      | ScoreCreateWithoutGameInput[]
      | ScoreUncheckedCreateWithoutGameInput[];
    connectOrCreate?:
      | ScoreCreateOrConnectWithoutGameInput
      | ScoreCreateOrConnectWithoutGameInput[];
    upsert?:
      | ScoreUpsertWithWhereUniqueWithoutGameInput
      | ScoreUpsertWithWhereUniqueWithoutGameInput[];
    createMany?: ScoreCreateManyGameInputEnvelope;
    set?: ScoreWhereUniqueInput | ScoreWhereUniqueInput[];
    disconnect?: ScoreWhereUniqueInput | ScoreWhereUniqueInput[];
    delete?: ScoreWhereUniqueInput | ScoreWhereUniqueInput[];
    connect?: ScoreWhereUniqueInput | ScoreWhereUniqueInput[];
    update?:
      | ScoreUpdateWithWhereUniqueWithoutGameInput
      | ScoreUpdateWithWhereUniqueWithoutGameInput[];
    updateMany?:
      | ScoreUpdateManyWithWhereWithoutGameInput
      | ScoreUpdateManyWithWhereWithoutGameInput[];
    deleteMany?: ScoreScalarWhereInput | ScoreScalarWhereInput[];
  };

  export type StatsUncheckedUpdateManyWithoutGameNestedInput = {
    create?:
      | XOR<StatsCreateWithoutGameInput, StatsUncheckedCreateWithoutGameInput>
      | StatsCreateWithoutGameInput[]
      | StatsUncheckedCreateWithoutGameInput[];
    connectOrCreate?:
      | StatsCreateOrConnectWithoutGameInput
      | StatsCreateOrConnectWithoutGameInput[];
    upsert?:
      | StatsUpsertWithWhereUniqueWithoutGameInput
      | StatsUpsertWithWhereUniqueWithoutGameInput[];
    createMany?: StatsCreateManyGameInputEnvelope;
    set?: StatsWhereUniqueInput | StatsWhereUniqueInput[];
    disconnect?: StatsWhereUniqueInput | StatsWhereUniqueInput[];
    delete?: StatsWhereUniqueInput | StatsWhereUniqueInput[];
    connect?: StatsWhereUniqueInput | StatsWhereUniqueInput[];
    update?:
      | StatsUpdateWithWhereUniqueWithoutGameInput
      | StatsUpdateWithWhereUniqueWithoutGameInput[];
    updateMany?:
      | StatsUpdateManyWithWhereWithoutGameInput
      | StatsUpdateManyWithWhereWithoutGameInput[];
    deleteMany?: StatsScalarWhereInput | StatsScalarWhereInput[];
  };

  export type GameCreateNestedOneWithoutScoreInput = {
    create?: XOR<
      GameCreateWithoutScoreInput,
      GameUncheckedCreateWithoutScoreInput
    >;
    connectOrCreate?: GameCreateOrConnectWithoutScoreInput;
    connect?: GameWhereUniqueInput;
  };

  export type IntFieldUpdateOperationsInput = {
    set?: number;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
  };

  export type GameUpdateOneRequiredWithoutScoreNestedInput = {
    create?: XOR<
      GameCreateWithoutScoreInput,
      GameUncheckedCreateWithoutScoreInput
    >;
    connectOrCreate?: GameCreateOrConnectWithoutScoreInput;
    upsert?: GameUpsertWithoutScoreInput;
    connect?: GameWhereUniqueInput;
    update?: XOR<
      XOR<
        GameUpdateToOneWithWhereWithoutScoreInput,
        GameUpdateWithoutScoreInput
      >,
      GameUncheckedUpdateWithoutScoreInput
    >;
  };

  export type GameCreateNestedOneWithoutStatsInput = {
    create?: XOR<
      GameCreateWithoutStatsInput,
      GameUncheckedCreateWithoutStatsInput
    >;
    connectOrCreate?: GameCreateOrConnectWithoutStatsInput;
    connect?: GameWhereUniqueInput;
  };

  export type GameUpdateOneRequiredWithoutStatsNestedInput = {
    create?: XOR<
      GameCreateWithoutStatsInput,
      GameUncheckedCreateWithoutStatsInput
    >;
    connectOrCreate?: GameCreateOrConnectWithoutStatsInput;
    upsert?: GameUpsertWithoutStatsInput;
    connect?: GameWhereUniqueInput;
    update?: XOR<
      XOR<
        GameUpdateToOneWithWhereWithoutStatsInput,
        GameUpdateWithoutStatsInput
      >,
      GameUncheckedUpdateWithoutStatsInput
    >;
  };

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringFilter<$PrismaModel> | string;
  };

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string;
  };

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedStringFilter<$PrismaModel>;
    _max?: NestedStringFilter<$PrismaModel>;
  };

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>;
    in?: number[] | ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntFilter<$PrismaModel> | number;
  };

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedDateTimeFilter<$PrismaModel>;
    _max?: NestedDateTimeFilter<$PrismaModel>;
  };

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>;
    in?: number[] | ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number;
    _count?: NestedIntFilter<$PrismaModel>;
    _avg?: NestedFloatFilter<$PrismaModel>;
    _sum?: NestedIntFilter<$PrismaModel>;
    _min?: NestedIntFilter<$PrismaModel>;
    _max?: NestedIntFilter<$PrismaModel>;
  };

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>;
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>;
    lt?: number | FloatFieldRefInput<$PrismaModel>;
    lte?: number | FloatFieldRefInput<$PrismaModel>;
    gt?: number | FloatFieldRefInput<$PrismaModel>;
    gte?: number | FloatFieldRefInput<$PrismaModel>;
    not?: NestedFloatFilter<$PrismaModel> | number;
  };

  export type ScoreCreateWithoutGameInput = {
    id?: string;
    score: number;
    createdAt?: Date | string;
  };

  export type ScoreUncheckedCreateWithoutGameInput = {
    id?: string;
    score: number;
    createdAt?: Date | string;
  };

  export type ScoreCreateOrConnectWithoutGameInput = {
    where: ScoreWhereUniqueInput;
    create: XOR<
      ScoreCreateWithoutGameInput,
      ScoreUncheckedCreateWithoutGameInput
    >;
  };

  export type ScoreCreateManyGameInputEnvelope = {
    data: ScoreCreateManyGameInput | ScoreCreateManyGameInput[];
    skipDuplicates?: boolean;
  };

  export type StatsCreateWithoutGameInput = {
    id?: string;
    plays?: number;
    bestScore?: number;
    createdAt?: Date | string;
  };

  export type StatsUncheckedCreateWithoutGameInput = {
    id?: string;
    plays?: number;
    bestScore?: number;
    createdAt?: Date | string;
  };

  export type StatsCreateOrConnectWithoutGameInput = {
    where: StatsWhereUniqueInput;
    create: XOR<
      StatsCreateWithoutGameInput,
      StatsUncheckedCreateWithoutGameInput
    >;
  };

  export type StatsCreateManyGameInputEnvelope = {
    data: StatsCreateManyGameInput | StatsCreateManyGameInput[];
    skipDuplicates?: boolean;
  };

  export type ScoreUpsertWithWhereUniqueWithoutGameInput = {
    where: ScoreWhereUniqueInput;
    update: XOR<
      ScoreUpdateWithoutGameInput,
      ScoreUncheckedUpdateWithoutGameInput
    >;
    create: XOR<
      ScoreCreateWithoutGameInput,
      ScoreUncheckedCreateWithoutGameInput
    >;
  };

  export type ScoreUpdateWithWhereUniqueWithoutGameInput = {
    where: ScoreWhereUniqueInput;
    data: XOR<
      ScoreUpdateWithoutGameInput,
      ScoreUncheckedUpdateWithoutGameInput
    >;
  };

  export type ScoreUpdateManyWithWhereWithoutGameInput = {
    where: ScoreScalarWhereInput;
    data: XOR<
      ScoreUpdateManyMutationInput,
      ScoreUncheckedUpdateManyWithoutGameInput
    >;
  };

  export type ScoreScalarWhereInput = {
    AND?: ScoreScalarWhereInput | ScoreScalarWhereInput[];
    OR?: ScoreScalarWhereInput[];
    NOT?: ScoreScalarWhereInput | ScoreScalarWhereInput[];
    id?: StringFilter<'Score'> | string;
    gameId?: StringFilter<'Score'> | string;
    score?: IntFilter<'Score'> | number;
    createdAt?: DateTimeFilter<'Score'> | Date | string;
  };

  export type StatsUpsertWithWhereUniqueWithoutGameInput = {
    where: StatsWhereUniqueInput;
    update: XOR<
      StatsUpdateWithoutGameInput,
      StatsUncheckedUpdateWithoutGameInput
    >;
    create: XOR<
      StatsCreateWithoutGameInput,
      StatsUncheckedCreateWithoutGameInput
    >;
  };

  export type StatsUpdateWithWhereUniqueWithoutGameInput = {
    where: StatsWhereUniqueInput;
    data: XOR<
      StatsUpdateWithoutGameInput,
      StatsUncheckedUpdateWithoutGameInput
    >;
  };

  export type StatsUpdateManyWithWhereWithoutGameInput = {
    where: StatsScalarWhereInput;
    data: XOR<
      StatsUpdateManyMutationInput,
      StatsUncheckedUpdateManyWithoutGameInput
    >;
  };

  export type StatsScalarWhereInput = {
    AND?: StatsScalarWhereInput | StatsScalarWhereInput[];
    OR?: StatsScalarWhereInput[];
    NOT?: StatsScalarWhereInput | StatsScalarWhereInput[];
    id?: StringFilter<'Stats'> | string;
    gameId?: StringFilter<'Stats'> | string;
    plays?: IntFilter<'Stats'> | number;
    bestScore?: IntFilter<'Stats'> | number;
    createdAt?: DateTimeFilter<'Stats'> | Date | string;
  };

  export type GameCreateWithoutScoreInput = {
    id?: string;
    name: string;
    slug: string;
    createdAt?: Date | string;
    Stats?: StatsCreateNestedManyWithoutGameInput;
  };

  export type GameUncheckedCreateWithoutScoreInput = {
    id?: string;
    name: string;
    slug: string;
    createdAt?: Date | string;
    Stats?: StatsUncheckedCreateNestedManyWithoutGameInput;
  };

  export type GameCreateOrConnectWithoutScoreInput = {
    where: GameWhereUniqueInput;
    create: XOR<
      GameCreateWithoutScoreInput,
      GameUncheckedCreateWithoutScoreInput
    >;
  };

  export type GameUpsertWithoutScoreInput = {
    update: XOR<
      GameUpdateWithoutScoreInput,
      GameUncheckedUpdateWithoutScoreInput
    >;
    create: XOR<
      GameCreateWithoutScoreInput,
      GameUncheckedCreateWithoutScoreInput
    >;
    where?: GameWhereInput;
  };

  export type GameUpdateToOneWithWhereWithoutScoreInput = {
    where?: GameWhereInput;
    data: XOR<
      GameUpdateWithoutScoreInput,
      GameUncheckedUpdateWithoutScoreInput
    >;
  };

  export type GameUpdateWithoutScoreInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    slug?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    Stats?: StatsUpdateManyWithoutGameNestedInput;
  };

  export type GameUncheckedUpdateWithoutScoreInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    slug?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    Stats?: StatsUncheckedUpdateManyWithoutGameNestedInput;
  };

  export type GameCreateWithoutStatsInput = {
    id?: string;
    name: string;
    slug: string;
    createdAt?: Date | string;
    Score?: ScoreCreateNestedManyWithoutGameInput;
  };

  export type GameUncheckedCreateWithoutStatsInput = {
    id?: string;
    name: string;
    slug: string;
    createdAt?: Date | string;
    Score?: ScoreUncheckedCreateNestedManyWithoutGameInput;
  };

  export type GameCreateOrConnectWithoutStatsInput = {
    where: GameWhereUniqueInput;
    create: XOR<
      GameCreateWithoutStatsInput,
      GameUncheckedCreateWithoutStatsInput
    >;
  };

  export type GameUpsertWithoutStatsInput = {
    update: XOR<
      GameUpdateWithoutStatsInput,
      GameUncheckedUpdateWithoutStatsInput
    >;
    create: XOR<
      GameCreateWithoutStatsInput,
      GameUncheckedCreateWithoutStatsInput
    >;
    where?: GameWhereInput;
  };

  export type GameUpdateToOneWithWhereWithoutStatsInput = {
    where?: GameWhereInput;
    data: XOR<
      GameUpdateWithoutStatsInput,
      GameUncheckedUpdateWithoutStatsInput
    >;
  };

  export type GameUpdateWithoutStatsInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    slug?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    Score?: ScoreUpdateManyWithoutGameNestedInput;
  };

  export type GameUncheckedUpdateWithoutStatsInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    slug?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    Score?: ScoreUncheckedUpdateManyWithoutGameNestedInput;
  };

  export type ScoreCreateManyGameInput = {
    id?: string;
    score: number;
    createdAt?: Date | string;
  };

  export type StatsCreateManyGameInput = {
    id?: string;
    plays?: number;
    bestScore?: number;
    createdAt?: Date | string;
  };

  export type ScoreUpdateWithoutGameInput = {
    id?: StringFieldUpdateOperationsInput | string;
    score?: IntFieldUpdateOperationsInput | number;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type ScoreUncheckedUpdateWithoutGameInput = {
    id?: StringFieldUpdateOperationsInput | string;
    score?: IntFieldUpdateOperationsInput | number;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type ScoreUncheckedUpdateManyWithoutGameInput = {
    id?: StringFieldUpdateOperationsInput | string;
    score?: IntFieldUpdateOperationsInput | number;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type StatsUpdateWithoutGameInput = {
    id?: StringFieldUpdateOperationsInput | string;
    plays?: IntFieldUpdateOperationsInput | number;
    bestScore?: IntFieldUpdateOperationsInput | number;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type StatsUncheckedUpdateWithoutGameInput = {
    id?: StringFieldUpdateOperationsInput | string;
    plays?: IntFieldUpdateOperationsInput | number;
    bestScore?: IntFieldUpdateOperationsInput | number;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type StatsUncheckedUpdateManyWithoutGameInput = {
    id?: StringFieldUpdateOperationsInput | string;
    plays?: IntFieldUpdateOperationsInput | number;
    bestScore?: IntFieldUpdateOperationsInput | number;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number;
  };

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF;
}
