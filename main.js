// Side-bar expansion
const sidebar = document.getElementById("sidebar");
const sidebarCollapsedWidth = "3.5em";
const itemCollapsedWidth = "1.5em";
const sidebarTransitionTime = "0.5s";

// Toggle sidebar so it loads compacted
addEventListener('DOMContentLoaded', (e) => { expandSidebar(); });

function expandSidebar()
{
    listItems = sidebar.getElementsByClassName("sidebar-content")[0]
        .getElementsByTagName("ul")[0]
        .getElementsByTagName("li");
    if (sidebar.style.maxWidth)
    {
        for(let ii = 0; ii < listItems.length; ii++)
        {
            listItems[ii].style.transitionDelay = sidebarTransitionTime;
            listItems[ii].style.maxWidth = null;
        }
        sidebar.style.transitionDelay = "0";
        sidebar.style.maxWidth = null;
    }
    else
    {
        for(let ii = 0; ii < listItems.length; ii++)
        {
            listItems[ii].style.transitionDelay = null;
            listItems[ii].style.maxWidth = itemCollapsedWidth;
        }
        sidebar.style.transitionDelay = null;
        sidebar.style.maxWidth = sidebarCollapsedWidth;
    }
    
   // sidebar.style.transform = 'scaleX(1)';
}