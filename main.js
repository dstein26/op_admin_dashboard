// Side-bar expansion
const sidebar = document.getElementById("sidebar");
const sidebarCollapsedWidth = "3.5em";
const itemCollapsedWidth = "1.5em";
const sidebarTransitionTime = "0.5s";

// Toggle sidebar so it loads compacted
addEventListener('DOMContentLoaded', (e) => { expandSidebar(); });

sidebar.addEventListener('transitionend', (e) => { reportTransitionTime(e); });

let transitionTimer = 0;   

function expandSidebar()
{
    listItems = sidebar.getElementsByClassName("sidebar-content")[0]
        .getElementsByTagName("ul")[0]
        .getElementsByTagName("li");
    if (sidebar.style.maxWidth) // Expanding the sidebar
    {
        for(let ii = 0; ii < listItems.length; ii++)
        {
            listItems[ii].style.maxWidth = null;
            listItems[ii].style.transitionDelay = null;
        }
        sidebar.style.maxWidth = null;
        sidebar.style.transitionDelay = "0s";
    }
    else    // Compressing the sidebar
    {
        for(let ii = 0; ii < listItems.length; ii++)
        {
            listItems[ii].style.maxWidth = itemCollapsedWidth;
            listItems[ii].style.transitionDelay = sidebarTransitionTime;
        }
        sidebar.style.maxWidth = sidebarCollapsedWidth;
        sidebar.style.transitionDelay = null;
    }

    transitionTimer = new Date().getTime();

    
   // sidebar.style.transform = 'scaleX(1)';
}

function reportTransitionTime(e)
{
    if (e.target === sidebar)
    {
        transitionTimer = ((new Date().getTime()) - transitionTimer) / 1000;
        console.log(`Transition time: ${transitionTimer}s`);
    }
}