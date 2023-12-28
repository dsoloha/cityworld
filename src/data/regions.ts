import type { Region, Terrain } from '$classes/City'

const regions: Map<Region, Terrain[]> = new Map([
    [
        'Australasia',
        [
            'canyon',
            'coastal',
            'desert',
            'forest',
            'hill',
            'mountain',
            'plain',
            'plateau',
            'plateau',
            'valley',
            ],
        ],
    ['Caribbean', ['coastal', 'forest', 'hill', 'island', 'valley']],
    ['Central America', ['coastal', 'hill', 'mountain', 'valley']],
    ['Central Asia', ['canyon', 'forest', 'hill', 'plain', 'plateau', 'valley']],
    ['Channel Islands', ['canyon', 'coastal', 'forest', 'hill', 'island', 'valley']],
    [
        'Eastern Africa',
        ['canyon', 'coastal', 'desert', 'hill', 'mountain', 'oasis', 'plain', 'plateau', 'valley'],
        ],
    ['Eastern Asia', ['canyon', 'coastal', 'desert', 'hill', 'mountain', 'plateau', 'valley']],
    ['Eastern Europe', ['canyon', 'coastal', 'forest', 'hill', 'valley']],
    ['Melanesia', ['valley', 'coastal', 'hill', 'island']],
    ['Micronesia', ['valley', 'coastal', 'hill', 'island']],
    ['Middle Africa', ['canyon', 'coastal', 'hill', 'jungle', 'oasis', 'plain', 'valley']],
    ['Northern Africa', ['canyon', 'coastal', 'desert', 'hill', 'mountain', 'oasis', 'valley']],
    [
        'Northern America',
        ['canyon', 'forest', 'hill', 'marsh', 'mountain', 'plateau', 'tundra', 'valley'],
        ],
    [
        'Northern Asia',
        ['canyon', 'coastal', 'forest', 'hill', 'mountain', 'plateau', 'tundra', 'valley'],
        ],
    ['Northern Europe', ['canyon', 'coastal', 'forest', 'hill', 'mountain', 'tundra', 'valley']],
    ['Oceania', ['coastal', 'hill', 'island', 'valley']],
    ['Polynesia', ['valley', 'coastal', 'hill', 'island']],
    [
        'South America',
        ['canyon', 'coastal', 'hill', 'jungle', 'mountain', 'plain', 'plateau', 'valley'],
        ],
    ['Southeastern Asia', ['canyon', 'hill', 'mountain', 'valley']],
    [
        'Southern Africa',
        ['canyon', 'coastal', 'forest', 'hill', 'jungle', 'mountain', 'plain', 'plateau', 'valley'],
        ],
    ['Southern Asia', ['canyon', 'coastal', 'forest', 'hill', 'jungle', 'plateau', 'valley']],
    ['Southern Europe', ['coastal', 'forest', 'hill', 'island', 'valley']],
    [
        'Western Africa',
        [
            'canyon',
            'coastal',
            'desert',
            'forest',
            'hill',
            'jungle',
            'oasis',
            'plain',
            'plateau',
            'valley',
            ],
        ],
    ['Western Asia', ['canyon', 'coastal', 'forest', 'hill', 'jungle', 'plateau', 'valley']],
    ['Western Europe', ['canyon', 'coastal', 'forest', 'hill', 'valley']],
    ])

export default regions
