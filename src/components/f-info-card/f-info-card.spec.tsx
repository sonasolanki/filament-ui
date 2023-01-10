import { h } from '@stencil/core';
import { newSpecPage } from '@stencil/core/testing';
import { FInfoCard } from './f-info-card';

describe('f-info-card', () => {
    //Define any configs, props here
    it('renders', async () =>{
        const { root } = await newSpecPage({
            components: [FInfoCard],
            template: () => <f-info-card></f-info-card>
        });
        expect(root).toEqualHtml(`
            <f-info-card>
                <div class="f-info-card">
                    f-info-card
                </div>
            </f-info-card>
        `)
    })
})