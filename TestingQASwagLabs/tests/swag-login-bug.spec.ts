import { test, expect } from '@playwright/test';

test('BUG-01: Validar expulsión de usuario tras login correcto', async ({ page }) => {
  // 1. Precondiciones
  await page.goto('https://www.saucedemo.com/');

  // 2. Pasos para reproducir (credenciales de tu informe)
  await page.locator('[data-test="username"]').fill('locked_out_user');
  await page.locator('[data-test="password"]').fill('secret_sauce');
  await page.locator('[data-test="login-button"]').click();

  // 3. Validar el Resultado Actual (El sistema lanza el error)
  const errorMessage = page.locator('[data-test="error"]');
  
  // Usamos expect.soft para que valide ambos textos sin detenerse en el primero
  await expect.soft(errorMessage).toBeVisible();
  await expect.soft(errorMessage).toContainText("Epic sadface");
});