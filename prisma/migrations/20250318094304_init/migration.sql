-- CreateTable
CREATE TABLE "transactions" (
    "id" SERIAL NOT NULL,
    "type" INTEGER NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "amount" DOUBLE PRECISION NOT NULL,
    "bi" TEXT NOT NULL,
    "card" TEXT NOT NULL,
    "time" TEXT NOT NULL,
    "storeOwner" TEXT NOT NULL,
    "storeName" TEXT NOT NULL,

    CONSTRAINT "transactions_pkey" PRIMARY KEY ("id")
);
