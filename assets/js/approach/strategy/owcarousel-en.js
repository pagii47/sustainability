var arr = [

['No Poverty','End poverty in all its forms everywhere','https://sdgs.un.org/goals/goal1'],
['Zero Hunger','End hunger, achieve food security and improved nutrition and promote sustainable agriculture','https://sdgs.un.org/goals/goal2'],
['Good Health And Well-Being','Ensure healthy lives and promote well-being for all at all ages','https://sdgs.un.org/goals/goal3'],
['Quality Education','Ensure inclusive and equitable quality education and promote lifelong learning opportunities for all','https://sdgs.un.org/goals/goal4'],
['Gender Equality','Achieve gender equality and empower all women and girls','https://sdgs.un.org/goals/goal5'],
['Clean Water and Sanitation','Ensure availability and sustainable management of water and sanitation for all','https://sdgs.un.org/goals/goal6'],
['Affordable and Clean Energy','Ensure access to affordable, reliable, sustainable and modern energy for all','https://sdgs.un.org/goals/goal7'],
['Decent Work and Economic Growth','Promote sustained, inclusive and sustainable economic growth, full and productive employment and decent work for all','https://sdgs.un.org/goals/goal8'],
['Industry, Innovation and Infrastructure','Build resilient infrastructure, promote inclusive and sustainable industrialization and foster innovation','https://sdgs.un.org/goals/goal9'],
['Reduced Inequalities','Reduce inequality within and among countries','https://sdgs.un.org/goals/goal10'],
['Sustainable Cities and Communities','Make cities and human settlements inclusive, safe, resilient and sustainable','https://sdgs.un.org/goals/goal11'],
['Responsible Consumption and Production','Ensure sustainable consumption and production patterns','https://sdgs.un.org/goals/goal12'],
['Climate Action','Take urgent action to combat climate change and its impacts','https://sdgs.un.org/goals/goal13'],
['Life Below Water','Conserve and sustainably use the oceans, seas and marine resources for sustainable development','https://sdgs.un.org/goals/goal14'],
['Life on Land','Protect, restore and promote sustainable use of terrestrial ecosystems, sustainably manage forests, combat desertification, and halt and reverse land degradation and halt biodiversity loss','https://sdgs.un.org/goals/goal15'],
['Peace, Justice and Strong Institutions','Promote peaceful and inclusive societies for sustainable development, provide access to justice for all and build effective, accountable and inclusive institutions at all levels','https://sdgs.un.org/goals/goal16'],
['Partnerships For The Goals','Strengthen the means of implementation and revitalize the Global Partnership for Sustainable Development','https://sdgs.un.org/goals/goal17']

]





var owlChild = $('.owl-carousel');
owlChild.owlCarousel({
    center: true,
    nav: false,
    loop: true,
    responsive: {
        0: {
            items: 3,
            margin: 16,
            stagePadding: 32
        },
        768: {
            items: 4,
            margin: 16,
            stagePadding: 32
        },
        992: {
            items: 5,
            margin: 32,
            stagePadding: 64
        },
        1200: {
            items: 6,
            margin: 32,
            stagePadding: 64
        }
    },
    onDragged: callback
});
function callback(event) {
    var id = $('.owl-item.center').find('div').attr('data-id');
    owlChange(id);
}
$('.unsdg .dropdown-item').click(function(event){
    var id = $(this).index()+1;
    owlChild.trigger('to.owl.carousel', id-1);
    owlChange(id);
});

function owlChange(e){
    var id = e;
    var val = $('.unsdg .dropdown-menu .dropdown-item:nth-child('+id+')').text();
    $('.unsdg .dropdown-toggle').text(val);
    $('.unsdg-text').text(arr[id-1][1]);
    $('.findmore').attr('href', arr[id-1][2]);
}

$('.owlPrev').click(function(){
    owlChild.trigger('prev.owl.carousel');
    callback();
});

$('.owlNext').click(function(){
    owlChild.trigger('next.owl.carousel');
    callback();
});

owlChange(1);
