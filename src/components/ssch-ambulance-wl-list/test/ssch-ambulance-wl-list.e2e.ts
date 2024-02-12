import { newE2EPage } from '@stencil/core/testing';

describe('ssch-ambulance-wl-list', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<ssch-ambulance-wl-list></ssch-ambulance-wl-list>');

    const element = await page.find('ssch-ambulance-wl-list');
    expect(element).toHaveClass('hydrated');
  });
});
