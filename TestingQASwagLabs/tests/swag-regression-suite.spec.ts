import { test, expect } from '@playwright/test';

test.describe('Swag Labs - Suite de Regresión de Bugs', () => {

  test('BUG-01: Validar bloqueo y mensaje de error para usuario bloqueado', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');
    await page.locator('[data-test="username"]').fill('locked_out_user');
    await page.locator('[data-test="password"]').fill('secret_sauce');
    await page.locator('[data-test="login-button"]').click();

    const errorMessage = page.locator('[data-test="error"]');
    await expect.soft(errorMessage).toBeVisible();
    await expect.soft(errorMessage).toContainText("Epic sadface");
  });

  test('BUG-02: Validar ausencia de selector de cantidad en inventario / producto', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');
    await page.locator('[data-test="username"]').fill('standard_user');
    await page.locator('[data-test="password"]').fill('secret_sauce');
    await page.locator('[data-test="login-button"]').click();

    // Verificamos que al añadir un producto, no existe un input numérico previo para modificar cantidades por lote
    const quantityInput = page.locator('.cart_quantity');
    await expect(quantityInput).toHaveCount(0);
  });

  test('BUG-03: Validar campos faltantes en el formulario de Checkout', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');
    await page.locator('[data-test="username"]').fill('standard_user');
    await page.locator('[data-test="password"]').fill('secret_sauce');
    await page.locator('[data-test="login-button"]').click();

    // Añadir producto y avanzar al checkout
    await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
    await page.locator('.shopping_cart_link').click();
    await page.locator('[data-test="checkout"]').click();

    // Validar que los únicos campos de dirección/contacto solicitados son Nombre, Apellido y Código Postal (dejando fuera calle, ciudad, país)
    await expect(page.locator('[data-test="firstName"]')).toBeVisible();
    await expect(page.locator('[data-test="lastName"]')).toBeVisible();
    await expect(page.locator('[data-test="postalCode"]')).toBeVisible();
    
    // Comprobar explícitamente que campos críticos de logística internacional no están contemplados
    await expect(page.locator('[data-test="country"]')).toHaveCount(0);
  });

});