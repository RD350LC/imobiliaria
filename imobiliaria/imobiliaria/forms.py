from django.shortcuts import render
from .models import Imovel
from .forms import BuscaImovelForm

def listar_imoveis(request):
    form = BuscaImovelForm(request.GET)
    imoveis = Imovel.objects.filter(disponivel=True)

    if form.is_valid():
        if form.cleaned_data.get('preco_minimo'):
            imoveis = imoveis.filter(preco__gte=form.cleaned_data['preco_minimo'])
        if form.cleaned_data.get('preco_maximo'):
            imoveis = imoveis.filter(preco__lte=form.cleaned_data['preco_maximo'])
        if form.cleaned_data.get('tipo'):
            imoveis = imoveis.filter(tipo=form.cleaned_data['tipo'])

    return render(request, 'imoveis/lista.html', {'imoveis': imoveis, 'form': form})
