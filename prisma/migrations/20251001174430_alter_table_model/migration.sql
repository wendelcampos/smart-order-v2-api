/*
  Warnings:

  - You are about to drop the column `closedAt` on the `tables` table. All the data in the column will be lost.
  - You are about to drop the column `opened_at` on the `tables` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "tables" DROP COLUMN "closedAt",
DROP COLUMN "opened_at";
