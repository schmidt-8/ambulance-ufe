import { newE2EPage } from '@stencil/core/testing';

describe('ssch-ambulance-wl-editor', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<ssch-ambulance-wl-editor></ssch-ambulance-wl-editor>');

    const element = await page.find('ssch-ambulance-wl-editor');
    expect(element).toHaveClass('hydrated');
  });
});
