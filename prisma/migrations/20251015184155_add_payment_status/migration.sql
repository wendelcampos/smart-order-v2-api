-- CreateEnum
CREATE TYPE "StatusPayment" AS ENUM ('open', 'paid');

-- AlterTable
ALTER TABLE "payments" ADD COLUMN     "status" "StatusPayment" NOT NULL DEFAULT 'open',
ALTER COLUMN "payment_type" DROP NOT NULL,
ALTER COLUMN "paymentDate" DROP NOT NULL;
