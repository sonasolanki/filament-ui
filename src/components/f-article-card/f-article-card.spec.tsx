import { h } from '@stencil/core';
import { newSpecPage } from '@stencil/core/testing';
import { FArticleCard } from './f-article-card';

describe('f-article-card', () => {
    //Define any configs, props here
    it('renders', async () =>{
        const { root } = await newSpecPage({
            components: [FArticleCard],
            template: () => <f-article-card></f-article-card>
        });
        expect(root).toEqualHtml(`
            <f-article-card>
                <div class="f-article-card">
                    f-article-card
                </div>
            </f-article-card>
        `)
    })
})