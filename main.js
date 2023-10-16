// Side-bar expansion
const sidebar = document.getElementById("sidebar");
const collapsedWidth = "3.5em"

function expandSidebar()
{
    listItems = sidebar.getElementsByClassName("sidebar-content")[0]
        .getElementsByTagName("ul")[0]
        .getElementsByTagName("li");
    if (sidebar.style.maxWidth)
    {
        for(let ii = 0; ii < listItems.length; ii++)
        {
            listItems[ii].style.maxWidth = null;
        }
        sidebar.style.maxWidth = null;
    }
    else
    {
        for(let ii = 0; ii < listItems.length; ii++)
        {
            listItems[ii].style.maxWidth = "1.5em";
        }
        sidebar.style.maxWidth = collapsedWidth;
    }
    
   // sidebar.style.transform = 'scaleX(1)';
}