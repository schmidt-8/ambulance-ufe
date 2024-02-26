import { newE2EPage } from '@stencil/core/testing';

describe('ssch-ambulance-wl-app', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<ssch-ambulance-wl-app></ssch-ambulance-wl-app>');

    const element = await page.find('ssch-ambulance-wl-app');
    expect(element).toHaveClass('hydrated');
  });
});
