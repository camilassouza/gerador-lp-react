export const mapData = (pageData) => {
    pageData.map(data => {
        const {footer_text = '',  slug = '', title = '', sections = [], menu = {}} = data;
        return {
            footerHtml: footer_text,
            slug: slug,
            title: '',
            sections: [],
            menu: {}
        }
    })
}

