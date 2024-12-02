function highlightLink()
{
    for (let i = 0; i < 5; i++)
    {
        let resource = document.getElementsByClassName('nav-link').item(i);
        
        if (("http://localhost:3000" + resource.getAttribute('href')) === document.documentURI)
        {
            resource.setAttribute('id', 'selected-link');
        }
        else if (resource.hasAttribute('id'))
        {
            resource.removeAttribute('id', 'selected-link');
        }
    }
}

highlightLink();